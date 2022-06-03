import RenderHTML from "../RenderHTML";
import Container from "../Container";

import { Box, Grid, Typography } from "@mui/material";

import { useMedia } from "../../hooks";

const DetailPolicy = ({ initData }) => {
  const [data] = initData;
  const { title } = data.items[0];

  const { isMdUp } = useMedia();
  console.log("datadatadatadatadata", data);
  return (
    <Box
      sx={{
        marginTop: isMdUp ? 25 : 5,
        mb: isMdUp ? "5rem" : "4rem",
      }}
    >
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
    </Box>
  );
};

export default DetailPolicy;
