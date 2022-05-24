import LoadingButton from "@mui/lab/LoadingButton";
import { useTheme } from "@mui/material";
import { forwardRef } from "react";

const LoadButton = forwardRef(({ loading, type, ...props }, ref) => {
  const theme = useTheme();
  return (
    <LoadingButton
      type="submit"
      sx={{
        color: theme.palette.common.neutral4,
        backgroundColor: theme.palette.primary.main,
        width: "10%",
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
