import { Button } from "@radix-ui/themes";
import Link from "next/link";

const ComplaintButton = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="/complaints/new">New Complaint</Link>
      </Button>
    </div>
  );
}
export default ComplaintButton