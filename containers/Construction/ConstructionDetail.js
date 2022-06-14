import { useCallback } from "react";
import { useRouter } from "next/router";

import get from "lodash/get";

import { useMedia } from "../../hooks";
import { Container, DetailBlog, RelatedBlog, OffsetTop, SEO } from "../../components";

const ConstructionDetail = ({ initData }) => {
  const router = useRouter();
  const { isSmDown } = useMedia();
  const [data, relatedData] = initData;

  const selectedPostHandler = useCallback((data) => {
    return () => {
      const { id } = data;
      const { pathname } = router;

      router.push({
        pathname,
        query: {
          id,
        },
      });
    };
  }, []);

  return (
    <OffsetTop>
      <Container>
        <SEO data={get(data, "meta")} />

        <DetailBlog
          {...{
            data,
          }}
        />
        {isSmDown && (
          <RelatedBlog
            data={relatedData?.items}
            selectedPostHandler={selectedPostHandler}
          />
        )}
      </Container>
    </OffsetTop>
  );
};

export default ConstructionDetail;
