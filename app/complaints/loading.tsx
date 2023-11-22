import { Table } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
import ComplaintButton from "./ComplaintButton";

const LoadingComplaints = () => {
  const complaints = [1, 2, 3, 4, 5];

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
            <Table.Row key={complaint}>
              <Table.RowHeaderCell>
                <Skeleton />
                <div className="block md:hidden mt-1">
                  <Skeleton />
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default LoadingComplaints;
