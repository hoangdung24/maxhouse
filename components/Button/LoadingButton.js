import { useTheme } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useMedia } from "../../hooks";

const LoadingButtonWrapper = ({ loading, ...props }) => {
  return (
    <LoadingButton
      type="submit"
      variant="outlined"
      size="small"
      sx={{
        paddingY: 2,
        paddingX: 3,
        borderRadius: 2,
      }}
      loading={loading}
      {...props}
    />
  );
};
export default LoadingButtonWrapper;
