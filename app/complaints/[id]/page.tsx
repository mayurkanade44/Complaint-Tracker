import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { id: string };
}

const ComplaintDetailsPage = async ({ params }: Props) => {
  const complaint = await prisma.complaint.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!complaint) notFound();

  return (
    <div>
      <Heading>{complaint.title}</Heading>
      <div className="flex space-x-3 my-2">
        <StatusBadge status={complaint.status} />
        <Text>{complaint.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose mt-4">
        <ReactMarkdown>{complaint.description}</ReactMarkdown>
      </Card>
    </div>
  );
};
export default ComplaintDetailsPage;
