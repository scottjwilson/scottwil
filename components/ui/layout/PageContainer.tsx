"use client";

import { motion } from "framer-motion";
import classNames from "classnames";
import React from "react";

const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      exit={{ opacity: 0, y: 20 }}
      className={classNames("", className)}
    >
      {children}
    </motion.section>
  );
};
export default PageContainer;
