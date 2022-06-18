import get from "lodash/get";
import { useCallback } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

import { useMedia } from "../../hooks";

import { Container, DetailBlog, SEO, RelatedBlog, OffsetTop } from "../../components";

const DesignDetail = ({ initData }) => {
  const router = useRouter();
  const { messages } = useIntl();
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
        <SEO data={get(data, "items[0].meta")} />

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
            title={messages["page.detailPage.relatedNews"]?.[0]?.["value"]}
          />
        )}
      </Container>
    </OffsetTop>
  );
};

export default DesignDetail;
