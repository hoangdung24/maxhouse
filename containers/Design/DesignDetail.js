import { Container, DetailBlog } from "../../components";

const DesignDetail = ({ initData }) => {
  const [data] = initData;

  return (
    <Container>
      <DetailBlog
        {...{
          data,
        }}
      />
    </Container>
  );
};

export default DesignDetail;
