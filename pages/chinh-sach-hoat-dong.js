import { DetailPolicy } from "../components";

import { PAGES, types } from "../api";
import { transformUrl, prefetchData } from "../libs";

const OperationPolicy = (props) => {
  return <DetailPolicy {...props} />;
};

export default OperationPolicy;

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, { type: types.operationPolicy, fields: "*", locale }),
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