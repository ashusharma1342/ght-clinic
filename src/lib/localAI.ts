export function localAIResponse(message: string) {
  const text = message.toLowerCase();

  if (text.includes("hair")) {
    return `
Possible Issue: Hair thinning or early hair loss.

Suggested Treatments at GHT Clinic:
• PRP Therapy
• Hair Transplant
• Mesotherapy

Upload a photo so our AI assistant can analyze your scalp.
`;
  }

  if (text.includes("acne")) {
    return `
Possible Issue: Acne caused by clogged pores or hormonal imbalance.

Treatments available:
• Chemical Peel
• Dermatology Medication
• Laser Therapy

You may upload an image for better analysis.
`;
  }

  return `
Thank you for contacting GHT Clinic.

Please describe your hair or skin concern or upload a photo.
`;
}
