const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017/BlogDB";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/*
* 
1.Using mongo shell, create 4 documents, having the following schema
name: string,
age: number, 
subject: string,
marks: number
db.users.insertOne({
name: "John",
age: 20,
subject: "Data Science",
marks: 30
})
db.users.insertMany([{
name: "Brown",
age: 20,
subject: "AI",
marks: 28
}, 
{
name: "Henry",
age: 19,
subject: "Data Science",
marks:35
}, 
{
name: "Jane",
age: 18,
subject: "Maths",
marks: 30
}])
2.
db.users.updateOne(
  {name: 'Henry'},          //filter
  {
    $set: {subject: 'Web Dev'}
  } 
)
*
*/
