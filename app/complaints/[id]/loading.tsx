import { Card } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingComplaintDetails = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <div className="flex space-x-3 my-2">
        <Skeleton width="4rem" />
        <Skeleton width="8rem" />
      </div>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};
export default LoadingComplaintDetails;
