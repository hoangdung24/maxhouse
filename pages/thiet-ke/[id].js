import get from "lodash/get";

import { PAGES, types } from "../../api";
import { transformUrl, prefetchData } from "../../libs";
import DesignDetail from "../../containers/Design/DesignDetail";

import axios from "../../axios.config";

export default function PageDesign({ ...props }) {
  return <DesignDetail {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const { id } = params;

    const urls = [
      transformUrl(`${PAGES}/${id}`, {
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    const categoryId = get(resList, "[0].category");

    if (categoryId) {
      const { data: resData } = await axios.get(
        transformUrl(PAGES, {
          type: types.designDetailPage,
          fields: "*",
          order: "first_published_at",
          limit: 6,
          category: categoryId,
        })
      );

      resList.push(resData);
    }

    return {
      props: { initData: resList, fallback },
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
