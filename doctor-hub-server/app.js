const express = require("express");
const cors = require("cors");
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
            const query = { phone: phone };
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
