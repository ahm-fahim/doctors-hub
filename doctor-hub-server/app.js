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
            const cursor = doctorsCollection.find(query);
            const doctors = await cursor.toArray();
            res.send(doctors);
        });

        // get single doctor data
        app.get("/doctors/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const doctor = await doctorsCollection.findOne(query);
            res.send(doctor);
        });

        // set booking data
        app.post("/bookings", async (req, res) => {
            const bookings = req.body;
            const result = await bookingCollection.insertOne(bookings);
            res.send(result);
        });

        // get booking data
        app.get("/bookings", async (req, res) => {
            const query = {};
            const cursor = bookingCollection.find(query);
            const bookings = await cursor.toArray();
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
