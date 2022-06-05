import { Box, Grid, Typography } from "@mui/material";

import OffsetTop from "../OffsetTop";
import Container from "../Container";
import { useMedia } from "../../hooks";
import RenderHTML from "../RenderHTML";

const DetailPolicy = ({ initData }) => {
  const [data] = initData;
  const { title } = data.items[0];

  const { isMdUp } = useMedia();
  return (
    <OffsetTop>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant={isMdUp ? "h1" : "h5"}
              sx={[
                {
                  textAlign: "center",
                  marginBottom: 10,
                },
              ]}
            >
              {title}
            </Typography>

            <RenderHTML data={data.items[0]} />
          </Grid>
        </Grid>
      </Container>
    </OffsetTop>
  );
};

export default DetailPolicy;
