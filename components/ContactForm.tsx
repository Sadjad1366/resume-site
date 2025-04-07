"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/Input";

type Props = {
  dict: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } },
};

export const ContactForm: React.FC<Props> = ({ dict }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="max-w-md mx-auto p-4"
    >
      <form className="space-y-4">
        <Input
          label={dict.name}
          name="name"
          placeholder={dict.name}
        />

        <Input
          label={dict.email}
          name="email"
          type="email"
          placeholder={dict.email}
        />

        <div className="flex flex-col gap-y-2">
          <label className="text-slate-500 text-xs capitalize font-semibold">
            {dict.message}
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder={dict.message}
            className="border rounded-md py-1 px-2 placeholder:text-xs placeholder:font-medium placeholder:text-slate-400 border-slate-300"
          />
        </div>

        <button
          type="submit"
          className="bg-slate-800 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-slate-700"
        >
          {dict.send}
        </button>
      </form>
    </motion.div>
  );
};
