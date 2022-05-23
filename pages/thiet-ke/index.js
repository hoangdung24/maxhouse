import DesignListing from "../../containers/Design/DesignListing";

import { PAGES, types, DESIGN_CATEGORIES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <DesignListing {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(DESIGN_CATEGORIES),
      transformUrl(PAGES, { type: types.designDetailPage, fields: "*" }),
      transformUrl(PAGES, { type: types.designListingPage, fields: "*" }),
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
