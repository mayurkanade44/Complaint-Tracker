import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import ComplaintFormSkelton from "./loading";

const ComplaintForm = dynamic(
  () => import("@/app/complaints/_components/ComplaintForm"),
  { ssr: false, loading: () => <ComplaintFormSkelton /> }
);

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
