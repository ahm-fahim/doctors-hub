const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();

app.use(cors());
app.use(express.json());

/*
    Data Base
*/

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s0ga6m2.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        const doctorsCollection = client
            .db("Doctors-Hub")
            .collection("doctors");
        const bookingCollection = client
            .db("Doctors-Hub")
            .collection("bookings");

        const usersCollection = client.db("Doctors-Hub").collection("users");

        // SIGN UP user
        app.post("/signup", async (req, res) => {
            try {
                const { userName, phoneNumber, password } = req.body;

                // Check if the username or phone number already exists
                const existingUser = await usersCollection.findOne({
                    $or: [{ userName }, { phoneNumber }],
                });
                if (existingUser) {
                    return res
                        .status(409)
                        .json({ error: "User already exists" });
                }

                // Hash the password
                const hashedPassword = await bcrypt.hash(password, 10);

                // Create a new user
                const newUser = new User({
                    userName,
                    phoneNumber,
                    password: hashedPassword,
                });

                // Save the user to the database
                await newUser.save();

                // Generate a JWT token
                const token = jwt.sign({ userId: newUser._id }, "secretKey");

                // Return the token
                res.json({ token });
            } catch (err) {
                console.error("Registration failed", err);
                res.status(500).json({ error: "Registration failed" });
            }
        });

        // SIGN IN user
        app.post("/signin", async (req, res) => {
            try {
                const { userName, password } = req.body;

                // Find the user by username
                const user = await usersCollection.findOne({ userName });
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }

                // Check the password
                const isPasswordValid = await bcrypt.compare(
                    password,
                    user.password
                );
                if (!isPasswordValid) {
                    return res.status(401).json({ error: "Invalid password" });
                }

                // Generate a JWT token
                const token = jwt.sign({ userId: user._id }, "secretKey");

                // Return the token
                res.json({ token });
            } catch (err) {
                console.error("Login failed", err);
                res.status(500).json({ error: "Login failed" });
            }
        });

        // Protected route to get current user data
        app.get("/user", authenticateToken, (req, res) => {
            // The user data can be accessed from the request object
            res.json(req.user);
        });

        // Logout route (optional)
        app.post("/logout", (req, res) => {
            // You can perform any cleanup or handle additional logic here
            res.json({ message: "Logged out successfully" });
        });

        // Middleware to authenticate the token
        function authenticateToken(req, res, next) {
            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(" ")[1];

            if (token == null) {
                return res.sendStatus(401);
            }

            jwt.verify(token, "secretKey", (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }

                req.user = user;
                next();
            });
        }


        // get all doctors data
        app.get("/doctors", async (req, res) => {
            const query = {};
            const doctors = await doctorsCollection.find(query).toArray();
            res.send(doctors);
        });

        // get single doctor data
        app.get("/doctors/:id", async (req, res) => {
            const date = req.query.date;
            console.log(date);
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const doctor = await doctorsCollection.findOne(query);

            //get booking provide date
            const bookingQuery = {
                appointDate: date,
            };

            const alreadyBooked = await bookingCollection
                .find(bookingQuery)
                .toArray();

            const bookedSchedule = alreadyBooked.map(
                (booked) => booked.schedule
            );

            const remainingSchedule = doctor.schedule.filter(
                (schedule) => !bookedSchedule.includes(schedule)
            );

            doctor.schedule = remainingSchedule;

            res.send(doctor);
        });

        // set booking data
        app.post("/bookings", async (req, res) => {
            const bookings = req.body;

            const query = {
                appointDate: bookings.appointDate,
                phone: bookings.phone,
                doctorId: bookings.doctorId,
            };

            const alreadyBooked = await bookingCollection.find(query).toArray();

            if (alreadyBooked.length) {
                const message = `You Already Booked On ${bookings.appointDate}`;

                return res.send({ acknowledged: false, message });
            }

            const result = await bookingCollection.insertOne(bookings);
            res.send(result);
        });

        // // get booking data
        // app.get("/bookings", async (req, res) => {
        //     const query = {};
        //     const cursor = bookingCollection.find(query);
        //     const bookings = await cursor.toArray();
        //     res.send(bookings);
        // });
        // get booking data for user
        app.get("/bookings", async (req, res) => {
            const phone = req.query.phone;
            // const date = req.query.date;
            const query = {
                phone: phone,
                // appointDate: date,
            };
            const bookings = await bookingCollection.find(query).toArray();
            res.send(bookings);
        });
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Server Started Successfully");
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
