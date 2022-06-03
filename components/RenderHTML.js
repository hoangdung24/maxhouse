import DOMPurify from "isomorphic-dompurify";
import { Box } from "@mui/material";

const renderHTML = ({ data, sx = {}, ...props }) => {
  const { text_alignment, body } = data;

  return (
    <Box
      sx={[
        {
          ...(text_alignment && {
            textAlign: text_alignment,
          }),
          wordWrap: "break-word",
          overflow: "hidden",
          ["& ol"]: {
            marginLeft: "1rem",
          },
          ["& ul"]: {
            marginLeft: "1.25rem",
          },
          ["& img"]: {
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          },
        },
        sx,
      ]}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(body, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
        }),
      }}
      {...props}
    ></Box>
  );
};

export default renderHTML;
