import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { Routes, Route, Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Thankyou <br />
            <Text as={'span'} color={'green.400'}>
              Your registration was successful
            </Text>
          </Heading>
          <Text color={'gray.500'}>
              A LinkerFi representative will be in touch
          </Text>
        </Stack>
      </Container>
    </>
  );
}
