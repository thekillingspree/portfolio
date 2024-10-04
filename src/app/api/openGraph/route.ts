import { NextRequest, NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing url" },
      {
        status: 400,
      }
    );
  }

  const dom = await JSDOM.fromURL(url);

  const doc = dom.window.document;
  const image =
    doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ||
    "";

  if (!image) {
    return NextResponse.json(
      { error: "No image found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    { image },
    {
      status: 200,
    }
  );
};
