import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
    unique: true,
  },
  semester: {
    type: Number,
    required: true,
    min: 1,
    max: 8,
  },
  department: {
    type: String,
    default: "Computer Science",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
