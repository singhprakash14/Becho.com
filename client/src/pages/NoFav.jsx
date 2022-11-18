import { Alert, AlertIcon, Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

function NoFav() {
  return (
    <Stack spacing={3} marginTop="100px">
      <Alert
        variant="solid"
        alignItems="center"
        width={"90%"}
        margin="auto"
        height="80px"
        status="info"
      >
        <AlertIcon />
        <Text> You haven't liked any ads yet</Text>
      </Alert>
    </Stack>
  );
}

export default NoFav;
