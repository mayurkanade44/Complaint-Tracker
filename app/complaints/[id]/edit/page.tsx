import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import ComplaintForm from "../../_components/ComplaintForm";

interface Props {
  params: { id: string };
}

const EditComplaintPage = async ({ params }: Props) => {
  const complaint = await prisma.complaint.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!complaint) notFound();

  return <ComplaintForm complaint={complaint} />;
};
export default EditComplaintPage;
