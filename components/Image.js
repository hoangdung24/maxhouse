import NextImage from "next/image";
import { Box, styled } from "@mui/material";

const defaultImageProps = {
  placeholder: "blur",
  objectFit: "contain",
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
};

const Image = ({ WrapperProps = {}, src, width, height, layout = "fill", ...props }) => {
  const loader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  if (!src) {
    return null;
  }

  if (layout === "fill") {
    return (
      <Wrapper width={width} height={height} {...WrapperProps}>
        <NextImage
          {...{
            ...defaultImageProps,
            ...(src.includes("http") && {
              loader,
            }),
            ...props,
            src,
            layout,
          }}
        />
      </Wrapper>
    );
  } else {
    return (
      <NextImage
        {...{
          ...defaultImageProps,
          src,
          layout,
          width,
          height,
          ...(src.includes("http") && {
            loader,
          }),
          ...props,
        }}
      />
    );
  }
};

export default Image;

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "width" && prop !== "height";
  },
})(({ width, height }) => {
  return {
    position: "relative",
    width,
    height,
  };
});
