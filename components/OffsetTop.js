import { Box } from "@mui/material";

export const OffsetTop = ({ children, sx = {} }) => {
  return (
    <Box
      sx={[
        {
          marginTop: 20,
        },
        sx,
      ]}
    >
      {children}
    </Box>
  );
};
export default OffsetTop;
