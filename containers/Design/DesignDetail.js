import { useCallback } from "react";
import { useRouter } from "next/router";

import { useMedia } from "../../hooks";
import { Container, DetailBlog, RelatedBlog, OffsetTop } from "../../components";

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

export default DesignDetail;
