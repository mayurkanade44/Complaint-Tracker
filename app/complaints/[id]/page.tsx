import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Button, Card, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { FiEdit } from "react-icons/fi";
import Link from "next/link";

interface Props {
  params: { id: string };
}

const ComplaintDetailsPage = async ({ params }: Props) => {
  const complaint = await prisma.complaint.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!complaint) notFound();

  return (
    <div className="grid md:grid-cols-2 gap-y-4">
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
      <div>
        <Button className="hover:cursor-pointer">
          <FiEdit />
          <Link href={`/complaints/${complaint.id}/edit`}>Edit Complaint</Link>
        </Button>
      </div>
    </div>
  );
};
export default ComplaintDetailsPage;
