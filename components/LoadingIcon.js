import { Fragment } from "react";
import { CircularProgress } from "@mui/material";

const LoadingIcon = () => {
  return (
    <Fragment>
      <svg width={0} height={0}>
        <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#cb0101" />
          <stop offset="0.2" stop-color="rgba(203, 1, 1, .8)" />
          <stop offset="0.4" stop-color="rgba(203, 1, 1, .6)" />
          <stop offset="0.6000000000000001" stop-color="rgba(203, 1, 1, .4)" />
          <stop offset="0.8" stop-color="rgba(203, 1, 1, .2)" />
          <stop offset="1" stop-color="rgba(203, 1, 1, 0)" />
        </linearGradient>
      </svg>

      <CircularProgress
        size={36}
        sx={{
          ["& .MuiCircularProgress-circle"]: {
            stroke: `url("#linearColors")`,
            strokeLinecap: "round",
          },
        }}
      />
    </Fragment>
  );
};

export default LoadingIcon;
