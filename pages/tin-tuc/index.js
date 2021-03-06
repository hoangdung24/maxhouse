import { PAGES, types } from "../../api";
import News from "../../containers/News/News";
import { transformUrl, prefetchData } from "../../libs";

import { NEWS_POST_LIMIT } from "../../constants";

export default function PageNews({ ...props }) {
  return <News {...props} />;
}

export async function getServerSideProps({ locale, query }) {
  try {
    const { id } = query;

    const newsDetailPageURL = transformUrl(PAGES, {
      limit: NEWS_POST_LIMIT,
      type: types.newsDetailPage,
      fields: "*",
      locale,
      order: "-first_published_at",
    });

    const urls = [
      transformUrl(PAGES, {
        type: types.newsListingPage,
        fields: "*",
        locale,
      }),
    ];

    if (id) {
      urls.push(
        transformUrl(`${PAGES}/${id}`, {
          fields: "*",
          locale,
        })
      );
    }

    urls.push(newsDetailPageURL);

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

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
