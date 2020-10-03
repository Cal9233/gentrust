import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";

const Gps = () => {
  const [viewport, setViewport] = useState({
    latitude: 25.806094,
    longitude: -80.383043,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/duex39/ckfsuek1011i519p5djk17rqj"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marker position={{ viewport }} />
      </ReactMapGl>
    </div>
  );
};

export default Gps;
