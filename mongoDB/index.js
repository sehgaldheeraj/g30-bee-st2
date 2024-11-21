const express = require("express");
const mongoose = require("mongoose");
const app = express();
const uri =
  "mongodb+srv://kumardheeraj0017:6RvI8vwyoaqCGF4F@cluster0.n3cbr.mongodb.net/studentsdb?retryWrites=true&w=majority&appName=Cluster0";
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(uri);
    console.log("DB Connection successful");
  } catch (err) {
    console.log("DB Connection failure:", err.message);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Schema
/*user = {
    name: string,   //required,
    age: number,    //required,
    subject: string,  //required,
    marks: number     //required [0, 100]
    roll: number      //required, unique
    grade: string 
}
*/
app.use(express.json());
app.use("/v1", require("./routes"));
//CRUD Operations using Mongoose
/*CREATE - postUser
 * 1. get the data to be saved from request's body
 * 2. do data validation on server side
 * 3. try saving the user to the database
 */
//READ - getUserById, getAllUsers
//UPDATE - updateGrade,
//DELETE - deleteUserById

app.listen(4000, () => {
  console.log("Backend is up at PORT:", 4000);
});
