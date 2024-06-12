import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1">Welcome to the Financial Times</Heading>
        <Text>
          Stay updated with the latest financial news and analysis.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;