// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function analyzeSkinImage(imageBase64: string) {
//   const response = await openai.chat.completions.create({
//     model: "gpt-4.1",

//     messages: [
//       {
//         role: "system",
//         content: `You are a dermatology and hair care AI assistant for a clinic.
//     Analyze the uploaded image and suggest possible hair or skin issues.
//     Provide:
//     - Possible condition
//     - General explanation
//     - Suggest visiting clinic
//     - Possible treatment options`,
//       },

//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "Analyze this hair or skin image",
//           },
//           {
//             type: "image_url",
//             image_url: {
//               url: `data:image/jpeg;base64,${imageBase64}`,
//             },
//           },
//         ],
//       },
//     ],
//   });

//   return response.choices[0].message.content;
// }
