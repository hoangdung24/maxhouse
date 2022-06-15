import { useRouter } from "next/router";

import { PREVIEW, types } from "../api";
import { transformUrl, prefetchData } from "../libs";
import { OffsetTop, Container, DetailBlog, DetailPolicy } from "../components";

import Home from "../containers/Home/Home";
import Service from "../containers/Service/Service";

const PreviewPage = (props) => {
  const { initData } = props;

  const router = useRouter();

  const { type } = router.query;

  if (type === types.homePage) {
    return <Home {...props} />;
  }

  if (type === types.servicePage) {
    return <Service {...props} />;
  }

  if (type === types.operationPolicy || type === types.paymentPolicy) {
    return <DetailPolicy {...props} />;
  }

  return (
    <OffsetTop>
      <Container>
        <DetailBlog
          {...{
            data: initData?.[0],
          }}
        />
      </Container>
    </OffsetTop>
  );
};

export default PreviewPage;

export async function getServerSideProps({ query, locale }) {
  try {
    const urls = [
      transformUrl(PREVIEW, {
        ...query,
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
