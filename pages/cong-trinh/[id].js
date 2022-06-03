import ConstructionDetail from "../../containers/Construction/ConstructionDetail";
import { PAGES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <ConstructionDetail {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
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
    console.log("🚀 ~ file: index.js ~ line 23 ~ getServerSideProps ~ err", err);

    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
