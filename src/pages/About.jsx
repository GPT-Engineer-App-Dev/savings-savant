import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">About Us</Heading>
        <Text>
          Welcome to the Financial Times. We provide the latest financial news and analysis.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;