import postMetadata from "@/src/db";
import { IncrementType } from "@/src/models/";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const { reactions } = await postMetadata.getReactions(params.slug);
  return Response.json({ reactions });
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const incType = req.nextUrl.searchParams.get("incType");

  if (
    incType === null ||
    !Object.values<string>(IncrementType).includes(incType)
  ) {
    return NextResponse.json(
      { success: false },
      {
        status: 400,
      }
    );
  }
  postMetadata.increment(params.slug, incType as IncrementType);
  console.log(`Reaction type ${incType} incremented for ${params.slug}`);
  return NextResponse.json({ success: true });
}
