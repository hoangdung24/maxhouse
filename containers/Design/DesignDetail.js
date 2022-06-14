import { useCallback } from "react";
import { useRouter } from "next/router";

import { useMedia } from "../../hooks";
import { Container, DetailBlog, RelatedBlog, OffsetTop, SEO } from "../../components";

import get from "lodash/get";

const DesignDetail = ({ initData }) => {
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
            data={relatedData?.items?.filter((el) => {
              return el.id != router.query.id;
            })}
            selectedPostHandler={selectedPostHandler}
          />
        )}
      </Container>
    </OffsetTop>
  );
};

export default DesignDetail;
