"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/Input";
import { ContactFormData, contactSchema } from "@/utils/validations/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { classNames } from "@/utils/classNames";
import toast from "react-hot-toast";

type Props = {
  dict: {
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ContactForm: React.FC<Props> = ({ dict }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "all",
  });

 const onSubmit = async(data: ContactFormData) => {
   try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });
    if(response.ok) {
      toast.success(dict.success);
      reset();
    } else {
      const errorData = await response.json();
      console.error("Validation errors: ", errorData);
      toast.error(dict.error)
    }

   } catch (error) {
      console.error("Unexpected error: ", error)
      toast.error(dict.error)
   }
 }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="max-w-md mx-auto p-4"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label={dict.name}
          placeholder={dict.name}
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label={dict.email}
          {...register("email")}
          type="email"
          placeholder={dict.email}
          error={errors.email?.message}
        />

        <div className="flex flex-col gap-y-2">
          <label className="text-slate-500 text-xs capitalize font-semibold">
            {dict.message}
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder={dict.message}
            className={classNames(
              "border rounded-md py-1 px-2 placeholder:text-xs",
              "placeholder:font-medium placeholder:text-slate-400 border-slate-300"
            )}
          />
          {errors.message && (
            <p className="text-red-500 text-xs font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-slate-800 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-slate-700"
        >
          {" "}
          {isSubmitting ? "Sending..." : `${dict.send}`}
        </button>
      </form>
    </motion.div>
  );
};
