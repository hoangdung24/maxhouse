import { Grid } from "@mui/material";

import CardItem from "../Card/CardItem";
import SliderListing from "../Slider/SliderListing";

const ListingBlog = ({ data, selectedPostHandler }) => {
  const length = data.length;

  if (length < 4) {
    return (
      <Grid container>
        {data.map((el, i) => {
          return (
            <Grid item md={3} key={i}>
              <CardItem {...el} selectedPostHandler={selectedPostHandler} />
            </Grid>
          );
        })}
      </Grid>
    );
  } else if (length < 16) {
    return (
      <SliderListing type={2}>
        {data.map((el, i) => {
          return <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />;
        })}
      </SliderListing>
    );
  }

  return (
    <SliderListing>
      {data.map((el, i) => {
        return <CardItem key={i} {...el} selectedPostHandler={selectedPostHandler} />;
      })}
    </SliderListing>
  );
};

export default ListingBlog;
