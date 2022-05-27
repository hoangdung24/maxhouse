import { PAGES, types, limitss } from "../../api";
import { transformUrl, prefetchData } from "../../libs";
import New from "../../containers/News/New";

export default function PageNews({ ...props }) {
  return <New {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: types.newsListingPage,
        fields: "*",
        locale,
      }),
      transformUrl(PAGES, {
        limit: limitss.limitPage,
        type: types.newsDetailPage,
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
