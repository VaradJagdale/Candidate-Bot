import Candidate from "../models/candidateModel.js";

export const chatBotResponse = async (req, res) => {
  const { message, email } = req.body;

  if (!message || !email) {
    return res.status(400).json({ reply: "Message and email required" });
  }

  const candidate = await Candidate.findOne({ email });

  let reply = "I'm here to assist you!";
  if (message.toLowerCase().includes("status")) {
    reply = candidate
      ? `Your current stage is ${candidate.stage}.`
      : "I couldn't find your record. Please check your email.";
  } else if (message.toLowerCase().includes("interview")) {
    reply = candidate?.interviewDate
      ? `Your interview is scheduled on ${candidate.interviewDate}.`
      : "No interview scheduled yet.";
  } else if (message.toLowerCase().includes("thanks")) {
    reply = "You're welcome! Wishing you the best!";
  }

  res.json({ reply });
};
