"use client";

import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  id: number;
}

const DeleteComplaintButton = ({ id }: Props) => {
  const router = useRouter();
  const [isDeleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const res = await axios.delete(`/api/complaints/${id}`);
      router.push("/complaints");
      router.refresh();
    } catch (error) {
      setDeleting(false);
      console.log(error);
      toast.error("Server error, try again later");
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          color="red"
          className="hover:cursor-pointer"
          disabled={isDeleting}
        >
          <MdDelete /> Delete {isDeleting && <Spinner />}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Complaint</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This complaint will no longer be accessible.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button
              variant="soft"
              color="gray"
              className="hover:cursor-pointer"
            >
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              className="hover:cursor-pointer"
              onClick={handleDelete}
            >
              Delete Complaint
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
export default DeleteComplaintButton;
