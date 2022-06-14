import DesignListing from "../../containers/Design/DesignListing";

import { PAGES, types, DESIGN_CATEGORIES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <DesignListing {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(DESIGN_CATEGORIES, {
        locale,
        limit: "1000",
        fields: ["thumbnails", "title", "subtitle", "name"].join(","),
      }),
      transformUrl(PAGES, {
        type: types.designDetailPage,
        limit: "1000",
        locale,
        fields: "*",
        order: "-first_published_at",
      }),
      transformUrl(PAGES, {
        type: types.designListingPage,
        fields: "*",
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
