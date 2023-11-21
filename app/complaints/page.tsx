import { Button } from "@radix-ui/themes";
import Link from "next/link";

const ComplaintsPage = () => {
  return (
    <div>
      <Button>
        <Link href="/complaints/new">New Complaint</Link>
      </Button>
    </div>
  );
};
export default ComplaintsPage;
