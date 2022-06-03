import { Container, DetailBlog } from "../../components";

const ConstructionDetail = ({ initData }) => {
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

export default ConstructionDetail;
