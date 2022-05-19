import { useRouter } from "next/router";
import React from "react";
import News from "../containers/News/News";

export default function PageNews() {
  const router = useRouter();
  console.log("first", router.pathname);
  return <News></News>;
}
