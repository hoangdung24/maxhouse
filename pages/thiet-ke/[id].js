import DesignDetail from "../../containers/Design/DesignDetail";
import { PAGES } from "../../api";
import { transformUrl, prefetchData } from "../../libs";

export default function PageDesign({ ...props }) {
  return <DesignDetail {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const { id } = params;

    // http://localhost/api/v2/pages/12/
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
