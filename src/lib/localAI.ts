export function localAIResponse(message: string) {
  const text = message.toLowerCase();

  if (text.includes("hair fall") || text.includes("hair loss")) {
    return `
Hair fall can happen due to:

• stress
• poor diet
• hormonal changes
• dandruff
• family history

If it continues for several weeks, a specialist consultation is recommended.
`;
  }

  if (text.includes("pimple") || text.includes("acne")) {
    return `
Acne can occur due to:

• oily skin
• clogged pores
• hormonal changes
• stress

Proper skincare and treatment can help control acne.
`;
  }

  if (text.includes("dandruff")) {
    return `
Dandruff may happen due to:

• dry scalp
• oily scalp
• fungal buildup
• harsh hair products
`;
  }

  return `
Hello! 👋

I'm here to help with hair and skin concerns.

Which issue are you facing?

• Hair fall
• Hair thinning
• Acne or pimples
• Dandruff
• Skin pigmentation
`;
}
