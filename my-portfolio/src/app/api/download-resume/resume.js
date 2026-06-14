import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  const response = new NextResponse(fileBuffer);

  response.headers.set("Content-Type", "application/pdf");
  response.headers.set("Content-Disposition", 'attachment; filename="Aseem_Updated-Resume.pdf"');

  return response;
}
