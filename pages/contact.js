import { useRouter } from "next/router";
import React from "react";
import Contact from "../containers/Contact/Contact";

export default function PageContact() {
  const router = useRouter();
  console.log("first", router.pathname);
  return <Contact />;
}
