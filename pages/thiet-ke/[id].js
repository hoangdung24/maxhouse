import DesignDetail from "../../containers/Design/DesignDetail";
import { PAGES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <DesignDetail {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const { id } = params;

    // http://localhost/api/v2/pages/12/
    const urls = [transformUrl(`${PAGES}/${id}`)];
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
