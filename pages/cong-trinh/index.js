import { PAGES, types, CONSTRUCTION_CATEGORIES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";
import Construction from "../../containers/Construction/Construction";

export default function PageConstruction({ ...props }) {
  return <Construction {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(CONSTRUCTION_CATEGORIES, { locale }),
      transformUrl(PAGES, {
        type: types.constructionDetailPage,
        fields: "*",
        locale,
      }),
      transformUrl(PAGES, {
        type: types.constructionListingPage,
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
