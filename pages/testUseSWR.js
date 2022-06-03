import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TestUseSWR() {
  const { data, error } = useSWR(
    "https://maxhouse.t-solution.vn/api/v2/design-categories/",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log("datadata", data.items[0].id);
  return (
    <div>
      <h1>sadasdsa</h1>
      <h1>sadasdsa</h1>
      <h1>sadasdsa</h1>
      <h1>sadasdsa</h1>
    </div>
  );
}
