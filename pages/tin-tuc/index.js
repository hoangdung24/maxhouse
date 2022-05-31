import { PAGES, types } from "../../api";
import { transformUrl, prefetchData } from "../../libs";
import News from "../../containers/News/News";

import { NEWS_POST_LIMIT } from "../../constants";

export default function PageNews({ ...props }) {
  return <News {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const newsDetailPageURL = transformUrl(PAGES, {
      limit: NEWS_POST_LIMIT,
      type: types.newsDetailPage,
      fields: "*",
      locale,
    });

    const urls = [
      transformUrl(PAGES, {
        type: types.newsListingPage,
        fields: "*",
        locale,
      }),
      newsDetailPageURL,
    ];

    const { resList, fallback } = await prefetchData(urls);

    const newsDetailPageList = resList.pop();

    fallback[newsDetailPageURL] = newsDetailPageList;

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
