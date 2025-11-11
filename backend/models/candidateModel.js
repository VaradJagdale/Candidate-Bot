import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: String,
  email: String,
  stage: { type: String, default: "Applied" },
  interviewDate: String,
});

export default mongoose.model("Candidate", candidateSchema);
