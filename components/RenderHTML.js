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
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          },
        },
        sx,
      ]}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(body),
      }}
      {...props}
    ></Box>
  );
};

export default renderHTML;
