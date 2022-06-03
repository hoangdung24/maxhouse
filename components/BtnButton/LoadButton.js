import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material";
import { forwardRef } from "react";
import { useMedia } from "../../hooks";

const LoadButton = forwardRef(({ loading, type, ...props }, ref) => {
  const { isMdUp } = useMedia();
  const theme = useTheme();
  return (
    <LoadingButton
      className="asdad"
      type="submit"
      sx={{
        color: theme.palette.common.neutral4,
        backgroundColor: theme.palette.primary.main,
        width: isMdUp ? "55%" : "30%",
        fontSize: "10px",
        p: "16px 24px",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      }}
      size="small"
      loading={loading}
      loadingIndicator="ĐANG GỬI..."
    >
      GỬI THÔNG TIN
    </LoadingButton>
  );
});
export default LoadButton;
