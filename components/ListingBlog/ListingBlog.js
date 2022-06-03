import { Grid, Box } from "@mui/material";

import CardItem from "../Card/CardItem";
import SliderListing from "../Slider/SliderListing";

const ListingBlog = ({ data, selectedPostHandler, ...props }) => {
  const length = data.length;

  if (length < 4) {
    return (
      <Grid container>
        {data.map((el, i) => {
          return (
            <Grid item sm={6} md={3} key={i}>
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                <CardItem {...el} selectedPostHandler={selectedPostHandler} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  } else if (length < 9) {
    return (
      <SliderListing type={2} {...props}>
        {data.map((el, i) => {
          return <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />;
        })}
      </SliderListing>
    );
  }

  return (
    <SliderListing {...props}>
      {data.map((el, i) => {
        return <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />;
      })}
    </SliderListing>
  );
};

export default ListingBlog;
