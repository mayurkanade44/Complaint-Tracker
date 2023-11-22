import { StatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import ComplaintButton from "./_components/ComplaintButton";

const ComplaintsPage = async () => {
  const complaints = await prisma.complaint.findMany();

  return (
    <div>
      <ComplaintButton />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Complaint</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {complaints.map((complaint) => (
            <Table.Row key={complaint.id}>
              <Table.RowHeaderCell>
                <Link
                  href={`/complaints/${complaint.id}`}
                  className="text-violet-600 hover:underline hover:text-violet-900"
                >
                  {complaint.title}
                </Link>
                <div className="block md:hidden mt-1">
                  <StatusBadge status={complaint.status} />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <StatusBadge status={complaint.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {complaint.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default ComplaintsPage;
