import DesignDetailRendering from "./components/DesignDetailRendering";

import { Container } from "../../components";

const DesignDetail = ({ initData }) => {
  const [data] = initData;

  return (
    <Container>
      <DesignDetailRendering
        {...{
          data,
        }}
      />
    </Container>
  );
};

export default DesignDetail;
