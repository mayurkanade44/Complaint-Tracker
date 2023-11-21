"use client";

import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createComplaintSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import { useState } from "react";
import Spinner from "@/app/components/Spinner";

type ComplaintForm = z.infer<typeof createComplaintSchema>;

const NewComplaint = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ComplaintForm>({
    resolver: zodResolver(createComplaintSchema),
  });
  const router = useRouter();

  const submit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/complaints", data);
      toast.success("Complaint has been submitted");
      router.push("/complaints");
    } catch (error) {
      setSubmitting(false);
      console.log(error);
      toast.error("Unexpected error ocurred, try again later");
    }
  });

  return (
    <form className="max-w-xl space-y-3" onSubmit={submit}>
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>
      <Button
        color="green"
        disabled={isSubmitting || !isValid}
        className="hover:cursor-pointer disabled:bg-gray-300"
      >
        Submit {isSubmitting && <Spinner />}
      </Button>
    </form>
  );
};
export default NewComplaint;
