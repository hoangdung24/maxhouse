import Slider from "react-slick";
import { useIntl } from "react-intl";
import { Fragment, useState } from "react";
import { Box, Typography } from "@mui/material";

import CardItem from "../Card/CardItem";

const setting = {
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "18px",
};

const RelatedBlog = ({ data, selectedPostHandler, title, ...props }) => {
  const length = data?.length;
  const { messages } = useIntl();
  const [minWrapperHeight, setMinWrapperHeight] = useState(0);
  if (!length) {
    return null;
  }

  return (
    <Fragment>
      <Box
        sx={{
          paddingY: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          children={title || messages["page.detailPage.relatedPost"]?.[0]?.["value"]}
          sx={{
            textTransform: "uppercase",
          }}
        />
      </Box>

      <Box
        sx={{
          "& .slick-list": {
            paddingLeft: "0!important",
          },
          "& .slider-wrapper": {
            padding: "0!important",
          },
        }}
      >
        <Slider {...setting}>
          {data.map((el, i) => {
            const { thumbnails } = el;
            const firstThumb = thumbnails.slice(0, 1);
            return (
              <CardItem
                key={i}
                {...el}
                thumbnails={firstThumb}
                selectedPostHandler={selectedPostHandler}
                minWrapperHeight={minWrapperHeight}
                setMinWrapperHeight={setMinWrapperHeight}
              />
            );
          })}
        </Slider>
      </Box>
    </Fragment>
  );
};

export default RelatedBlog;
