"use client";
import { m } from "framer-motion";
import { ReactNode } from "react";

const LinkAnimation = ({ children }: { children: ReactNode }) => {
  return <m.div whileHover={{ scale: 1.1 }}>{children}</m.div>;
};

export default LinkAnimation;
