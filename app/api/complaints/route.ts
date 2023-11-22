import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { complaintSchema } from "../../validationSchema";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validations = complaintSchema.safeParse(body);

  if (!validations.success) {
    return NextResponse.json(validations.error.format(), { status: 400 });
  }

  const newComplaint = await prisma.complaint.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(
    { message: "Complaint has been raised", newComplaint },
    { status: 201 }
  );
}
