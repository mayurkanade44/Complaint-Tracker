import { complaintSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const validation = complaintSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const complaint = await prisma.complaint.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!complaint)
    return NextResponse.json(
      { message: "Complaint not found" },
      { status: 404 }
    );

  const updatedComplaint = await prisma.complaint.update({
    where: { id: parseInt(params.id) },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedComplaint);
}
