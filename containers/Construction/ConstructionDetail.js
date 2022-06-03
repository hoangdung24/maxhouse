import { Container, DetailBlog } from "../../components";

const ConstructionDetail = ({ initData }) => {
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
      <DetailBlog
        {...{
          data,
        }}
      />
    </Container>
  );
};

export default ConstructionDetail;
