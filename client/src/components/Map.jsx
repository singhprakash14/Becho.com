import { Box } from "@chakra-ui/react";
import React from "react";

function Map({ place }) {
  return (
    <Box>
      <iframe
        width={"100%"}
        height="300"
        id="gmap_canvas"
        src={`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </Box>
  );
}

export default Map;
