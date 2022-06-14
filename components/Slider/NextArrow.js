import { Box } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        right: "8px !important",
        ["&:before"]: {
          display: "none",
        },
      }}
      onClick={onClick}
    >
      <KeyboardArrowDownIcon
        sx={{
          color: "#FFF !important",
          transform: "rotate(-90deg)",
        }}
      />
    </Box>
  );
}

export default NextArrow;
