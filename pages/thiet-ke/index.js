import DesignListing from "../../containers/Design/DesignListing";

import { PAGES, types, DESIGN_CATEGORIES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <DesignListing {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(DESIGN_CATEGORIES, { locale }),
      transformUrl(PAGES, {
        type: types.designDetailPage,

        fields: "*",
        limit: "1000",
        locale,
      }),
      transformUrl(PAGES, {
        type: types.designListingPage,
        fields: "*",
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls);

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
