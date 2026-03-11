// import { NextRequest, NextResponse } from "next/server";
// import { analyzeSkinImage } from "@/lib/ai";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const { image } = body;

//     if (!image) {
//       return NextResponse.json({ error: "Image missing" }, { status: 400 });
//     }

//     const analysis = await analyzeSkinImage(image);

//     return NextResponse.json({
//       success: true,
//       analysis,
//     });
//   } catch (error) {
//     console.error("AI ERROR:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "AI analysis failed",
//       },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";

export async function POST() {
  const result = `
AI Analysis Result:

Possible Condition:
Early Stage Hair Thinning

Suggested Treatments:
• PRP Therapy
• Hair Growth Therapy
• Hair Transplant

Recommendation:
Consult a dermatologist at GHT Clinic.
`;

  return NextResponse.json({
    success: true,
    analysis: result,
  });
}
