import { Box, Image } from "@chakra-ui/react";
import React from "react";

function NoData() {
  return (
    <Box>
      <Image
        height={"100vh"}
        width="100vw"
        src="https://vinoroc.com/static/app/images/no-record-found.76d6bd93c23b.gif"
      />
    </Box>
  );
}

export default NoData;
