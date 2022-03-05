import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import './App.css';
import DeveloperForm from "./DeveloperForm";
import Landing from './Landing';
import { Routes, Route } from "react-router-dom";

const customTheme = extendTheme({
  fonts: {
    heading: 'Syne, sans-serif',
    body: 'Syne, sans-serif',
  },
  colors: {
    main: '#60c2f4',
    brand: {
      100: "#60c2f4",
      // ...
      900: "#1a202c",
    },
  },
})

export const App = () => (

  <ChakraProvider theme={customTheme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="developer" element={<DeveloperForm />} />
          </Routes>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
