import React from "react";
import { PAGES, types } from "../api";
import { transformUrl, prefetchData } from "../libs";

import Contact from "../containers/Contact/Contact";

export default function PageContact(props) {
  return <Contact {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(PAGES, { type: types.contactPage, fields: "*" }),
    ];

    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    console.log(
      "🚀 ~ file: index.js ~ line 23 ~ getServerSideProps ~ err",
      err
    );

    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
