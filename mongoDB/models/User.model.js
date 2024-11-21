const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  roll: { type: Number, unique: true },
  grade: String,
  createdAt: { type: Date, default: Date.now },
  //calculateGrade: function () {},
});
//userSchema.statics
userSchema.methods.calculateGrade = function () {
  if (this.marks >= 90) {
    this.grade = "A+";
  } else if (this.marks >= 80) {
    this.grade = "A";
  } else if (this.marks >= 70) {
    this.grade = "B";
  } else if (this.marks >= 60) {
    this.grade = "C";
  } else if (this.marks >= 50) {
    this.grade = "D";
  } else {
    this.grade = "F";
  }
};
//Model: class of entity user
const User = mongoose.model("users", userSchema);
module.exports = User;
