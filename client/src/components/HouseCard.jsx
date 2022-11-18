import { Box, Flex, Image } from "@chakra-ui/react";

const HouseCard = (props) => {
  const { item } = props;

  return (
    <div>
      <Box
        width="100%"
        h="270px"
        borderWidth="2px"
        borderRadius="md"
        border="1px solid rgba(0, 0, 0, 0.30)"
        overflow="hidden"
        cursor="pointer"
        className="hover-location"
      >
        <Flex
          position="relative"
          height="160px"
          margin="8px"
          justifyContent="center"
          align="start"
        >
          <Image height="160px" src={item.image[0]} alt="" />
        </Flex>

        <Box h="72px" p="2" pl="4">
          <Box
            fontSize="20px"
            color="002f34"
            fontWeight="700"
            lineHeight="23pxpx"
          >
            {item.price.toLocaleString("en-IN", {
              maximumFractionDigits: 0,
              style: "currency",
              currency: "INR",
            })}
          </Box>

          <Box
            mt="1"
            as="h4"
            lineHeight="16px"
            fontSize="16px"
            fontWeight={500}
            noOfLines={1}
            color="black"
            opacity="100%"
          >
            {item.address}
          </Box>

          <Box
            display="flex"
            mt="2"
            fontSize="14px"
            alignItems="center"
            justifyContent="space-between"
            color="002f34"
            opacity="64%"
          >
            {item.furnished}
            <Box as="span" ml="2" fontSize="12px" color="222f34" opacity="64%">
              {item.postDate}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HouseCard;
