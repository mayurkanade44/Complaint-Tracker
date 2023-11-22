import dynamic from "next/dynamic";
import ComplaintFormSkelton from "./loading";

const ComplaintForm = dynamic(
  () => import("@/app/complaints/_components/ComplaintForm"),
  { ssr: false, loading: () => <ComplaintFormSkelton /> }
);

const NewComplaint = () => {
  return <ComplaintForm />;
};
export default NewComplaint;
