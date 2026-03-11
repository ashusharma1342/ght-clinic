export type Step =
  | "welcome"
  | "concern"
  | "duration"
  | "symptoms"
  | "upload"
  | "analysis";

export const consultationSteps = {
  welcome: {
    message:
      "Hi 👋 Welcome to GHT Clinic AI Assistance.\n\nWhat type of concern are you experiencing?",
    options: ["Hair Loss", "Dandruff", "Acne", "Pigmentation"],
    next: "duration",
  },

  duration: {
    message: "How long have you been experiencing this issue?",
    options: [
      "Less than 1 month",
      "1-6 months",
      "6-12 months",
      "More than 1 year",
    ],
    next: "symptoms",
  },

  symptoms: {
    message: "Do you notice any of these symptoms?",
    options: ["Hair thinning", "Scalp itching", "Redness", "Inflammation"],
    next: "upload",
  },

  upload: {
    message: "Please upload a photo so our AI can analyze the issue.",
    options: [],
  },
};
