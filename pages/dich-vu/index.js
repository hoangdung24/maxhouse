import { PAGES, types } from "../../api";
import Service from "../../containers/Service/Service";
import { prefetchData, transformUrl } from "../../libs";

export default function Pageservice({ ...props }) {
  return <Service {...props} />;
}

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [transformUrl(PAGES, { type: types.servicePage, fields: "*", locale })];

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
