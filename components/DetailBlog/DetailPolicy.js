import { Grid, Typography } from "@mui/material";

import OffsetTop from "../OffsetTop";
import Container from "../Container";
import { useMedia } from "../../hooks";
import RenderHTML from "../RenderHTML";

const DetailPolicy = ({ initData }) => {
  const { isMdUp } = useMedia();
  let [data] = initData;

  data = data?.items?.[0] || data;

  let { title, text_alignment, body } = data;

  if (!text_alignment) {
    text_alignment = "left";
  }

  if (typeof body === "string") {
    body = [
      {
        block_type: "richtext",
        value: body,
      },
    ];
  }

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

            <RenderHTML
              data={{
                body,
                text_alignment,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </OffsetTop>
  );
};

export default DetailPolicy;
