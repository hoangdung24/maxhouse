import React from "react";
import { PAGES, types } from "../../api";
import Service from "../../containers/Service/Service";
import { prefetchData, transformUrl } from "../../libs";

export default function Pageservice({ ...props }) {
  return <Service {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, { type: types.servicePage, fields: "*", locale }),
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
