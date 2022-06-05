import { Box } from "@mui/material";

export const OffsetTop = ({ children }) => {
  return (
    <Box
      sx={{
        marginTop: 20,
      }}
    >
      {children}
    </Box>
  );
};
export default OffsetTop;
