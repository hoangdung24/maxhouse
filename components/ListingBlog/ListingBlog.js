import { forwardRef } from "react";
import { Grid, Box } from "@mui/material";

import CardItem from "../Card/CardItem";
import SliderListing from "../Slider/SliderListing";

const ListingBlog = forwardRef(
  (
    { data, selectedPostHandler, minWrapperHeight, setMinWrapperHeight, ...props },
    ref
  ) => {
    const length = data?.length;

    if (!length) {
      return null;
    }

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
                  <CardItem
                    {...el}
                    selectedPostHandler={selectedPostHandler}
                    minWrapperHeight={minWrapperHeight}
                    setMinWrapperHeight={setMinWrapperHeight}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (length < 9) {
      return (
        <SliderListing ref={ref} type={2} {...props}>
          {data.map((el, i) => {
            return (
              <CardItem
                key={i}
                {...el}
                selectedPostHandler={selectedPostHandler}
                minWrapperHeight={minWrapperHeight}
                setMinWrapperHeight={setMinWrapperHeight}
              />
            );
          })}
        </SliderListing>
      );
    }

    return (
      <SliderListing ref={ref} {...props}>
        {data.map((el, i) => {
          return (
            <CardItem
              key={i}
              {...el}
              selectedPostHandler={selectedPostHandler}
              minWrapperHeight={minWrapperHeight}
              setMinWrapperHeight={setMinWrapperHeight}
            />
          );
        })}
      </SliderListing>
    );
  }
);

export default ListingBlog;
