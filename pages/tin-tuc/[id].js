import NewsDetail from "../../containers/News/NewsDetail";
import { PAGES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

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
    const { resList, fallback } = await prefetchData(urls);

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
