import { DetailPolicy } from "../components";

import { PAGES, types } from "../api";
import { transformUrl, prefetchData } from "../libs";

const PaymentPolicyPage = (props) => {
  return <DetailPolicy {...props} />;
};

export default PaymentPolicyPage;

export async function getServerSideProps({ params, query, locale }) {
  try {
    const urls = [
      transformUrl(PAGES, { type: types.paymentPolicy, fields: "*", locale }),
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
