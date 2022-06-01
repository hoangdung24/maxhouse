import Home from "../containers/Home/Home";

import { PAGES, types } from "../api";

import { transformUrl, prefetchData } from "../libs";

export default function PageHome(props) {
  return <Home {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [transformUrl(PAGES, { type: types.homePage, fields: "*" })];

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
