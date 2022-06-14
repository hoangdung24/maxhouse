import { Box } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function PreviousArrow(props) {
  const { className, style, onClick } = props;

  return (
    <Box
      className={className}
      sx={{
        ...style,
        display: "block",
        left: "8px !important",
        zIndex: 1,

        ["&:before"]: {
          display: "none",
        },
      }}
      onClick={onClick}
    >
      <KeyboardArrowDownIcon
        sx={{
          color: "#FFF !important",
          transform: "rotate(90deg)",
        }}
      />
    </Box>
  );
}

export default PreviousArrow;
