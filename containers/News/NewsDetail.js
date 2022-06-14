import get from "lodash/get";

import { Container, DetailBlog, SEO } from "../../components";

const DesignDetail = ({ initData }) => {
  const [data] = initData;

  return (
    <Container
      sx={[
        {
          marginTop: "8rem",
          marginBottom: "5rem",
        },
      ]}
    >
      <SEO data={get(data, "items[0].meta")} />

      <DetailBlog
        {...{
          data,
        }}
      />
    </Container>
  );
};

export default DesignDetail;
