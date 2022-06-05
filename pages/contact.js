import React from "react";
import { PAGES, types } from "../api";
import { transformUrl, prefetchData } from "../libs";

import Contact from "../containers/Contact/Contact";

export default function PageContact(props) {
  return <Contact {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: types.contactPage,
        fields: ["title", "description"].join(","),
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
