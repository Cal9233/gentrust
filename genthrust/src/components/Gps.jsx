import React from "react";
import Iframe from "react-iframe";

const Gps = () => {
  return (
    <div style={{ width: "100%" }}>
      <Iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3509%20NW%20115%20Ave.%20Doral%20Fl%2033178+(GenThrust)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></Iframe>
    </div>
  );
};

export default Gps;
