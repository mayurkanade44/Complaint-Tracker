import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
  status: Status;
}

const StatusBadge = ({ status }: Props) => {
  const statusMap: Record<
    Status,
    { label: String; color: "red" | "violet" | "green" }
  > = {
    OPEN: { label: "Open", color: "red" },
    IN_PROGRESS: { label: "In Progress", color: "violet" },
    CLOSE: { label: "Closed", color: "green" },
  };

  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
export default StatusBadge;
