import Design from "../containers/Design/Design";

import { PAGES, types, DESIGN_CATEGORIES } from "../api";
import { transformUrl, prefetchData } from "../libs";

export default function PageDesign({ ...props }) {
  return <Design {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(DESIGN_CATEGORIES),
      transformUrl(PAGES, { type: types.designDetailPage, fields: "*" }),
    ];
    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    console.log("🚀 ~ file: index.js ~ line 23 ~ getServerSideProps ~ err", err);

    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
