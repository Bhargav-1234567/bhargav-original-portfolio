"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const AppHeader = () => {
  const pathname = usePathname();

  useEffect(() => {}, [pathname]);

  return (
    <motion.div
      className="app-header-container my-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inner">
        <Link
          href={"/"}
          passHref
          className={`header-item ${pathname === "/" ? "active" : ""}`}
        >
          My Profile
        </Link>
        <Link
          href={"/skills"}
          passHref
          className={`header-item ${pathname === "/skills" ? "active" : ""}`}
        >
          Skills
        </Link>
        <Link
          href={"/projects"}
          passHref
          className={`header-item ${pathname === "/projects" ? "active" : ""}`}
        >
          Projects
        </Link>
        <Link
          href={"/resume"}
          passHref
          className={`header-item ${pathname === "/resume" ? "active" : ""}`}
        >
          Resume
        </Link>
      </div>
    </motion.div>
  );
};

export default AppHeader;
