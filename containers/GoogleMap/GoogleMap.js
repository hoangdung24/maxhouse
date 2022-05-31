import { Box } from "@mui/material";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};
export default function GoogleMap() {
  return (
    <Box style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </Box>
  );
}
