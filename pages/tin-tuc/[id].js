import NewsDetail from "../../containers/News/NewsDetail";
import { PAGES, types } from "../../api";

import { transformUrl, prefetchData } from "../../libs";

import axios from "../../axios.config";

export default function NewsPage({ ...props }) {
  return <NewsDetail {...props} />;
}

export async function getServerSideProps({ params, locale }) {
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

    const { data: resData } = await axios.get(
      transformUrl(PAGES, {
        type: types.newsDetailPage,
        fields: "*",
        order: "-first_published_at",
        limit: 6,
      })
    );

    resList.push(resData);
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
