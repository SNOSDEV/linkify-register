// import { Box, ButtonGroup, Radio, Text } from "@chakra-ui/react";
// import { Formik } from "formik";
// import {
//     CheckboxContainer,
//     CheckboxControl,
//     CheckboxSingleControl,
//     InputControl,
//     NumberInputControl,
//     PercentComplete,
//     RadioGroupControl,
//     ResetButton,
//     SelectControl,
//     SliderControl,
//     SubmitButton,
//     SwitchControl,
//     TextareaControl
// } from "formik-chakra-ui";
// import * as React from "react";
// import * as Yup from "yup";

// const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

// const onSubmit = (values: any) => {
//     sleep(300).then(() => {
//         window.alert(JSON.stringify(values, null, 2));
//     });
// };

// const EXPERTISE_OPTIONS = [
//     'DeFi/PriFi',
//     'GameFi/P2E',
//     'Smart Contracts',
//     'Privacy/Security',
//     'Metaverse',
//     'NFT Utility',
//     'Auditing/Cryptanalysis/Bug Bounties',
//     'Web3 ',
//     'Algorithms/Automation/ML',
//     'Databases',
// ]
// const initialValues = {
//     devSystems: 'devSystems',
//     devExpertise: ['Metaverse'],
//     devLanguages: 'devLanguages',
//     devExperience: 'devExperience',
// };

// const validationSchema = Yup.object({
//     devSystems: Yup.string().required(),
//     devExpertise: Yup.array().min(1),
//     devLanguages: Yup.string().required(),
//     devExperience: Yup.string().required(),
// });

// const Form = () => {
//     const onSubmit = (values: any) => {
//         console.log("Submit: ", values);
//     }

//     return (
//         <Formik
//             initialValues={initialValues}
//             onSubmit={onSubmit}
//             validationSchema={validationSchema}
//         >
//             {({ handleSubmit, values, errors }) => (
//                 <Box
//                     borderWidth="1px"
//                     rounded="lg"
//                     shadow="1px 1px 3px rgba(0,0,0,0.3)"
//                     maxWidth={800}
//                     p={6}
//                     m="10px auto"
//                     as="form"
//                     onSubmit={handleSubmit as any}
//                 >
//                     <Text fontSize='6xl'>Developer Sign Up</Text>
//                     <Text p={4} fontSize='md'>Which languages or systems are you or your team most proficient in? Would you consider yourself either primarily a front end or backend Developer. Please outline any of your previous blockchain development experience.</Text>
//                     <TextareaControl p={4} name="devSystems" />

//                     <Text p={4} fontSize='md'>Select one or more of the following categories that represent your expertise (only select categories that you have extensive knowledge of.):</Text>
//                     <CheckboxContainer p={4} name="devExpertise">
//                         {EXPERTISE_OPTIONS.map(e => (
//                             <CheckboxControl size="lg" name="devExpertise" value={e} className="l-checkbox">
//                                 {e}
//                             </CheckboxControl>
//                         ))}
//                     </CheckboxContainer>

//                     <Text p={4} fontSize='md'>List the languages or systems you or your team is most proficient in:</Text>
//                     <TextareaControl p={4} name="devLanguages" />

//                     <Text p={4} fontSize='md'>Please outline any of your previous blockchain development experience and previous & current affiliations with any projects:</Text>
//                     <TextareaControl p={4} name="devExperience" />

//                     <ButtonGroup>
//                         <SubmitButton>Submit</SubmitButton>
//                         <ResetButton>Reset</ResetButton>
//                     </ButtonGroup>

//                     {/* <Box as="pre" marginY={10}>
//                         {JSON.stringify(values, null, 2)}
//                         <br />
//                         {JSON.stringify(errors, null, 2)}
//                     </Box> */}
//                 </Box>
//             )}
//         </Formik>
//     );
// };

// export default Form;

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
  import { Widget } from '@typeform/embed-react'

  export default function DeveloperForm() {
    return (
      <>
        <Container maxW={'3xl'}>
            <Widget id="xQdv3Qwv" style={{ width: '100vw', height: '100vh' }} className="my-form" />
        </Container>
      </>
    );
  }
  