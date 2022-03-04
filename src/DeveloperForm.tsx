import { Box, ButtonGroup, Radio, Text } from "@chakra-ui/react";
import { Formik } from "formik";
import {
    CheckboxContainer,
    CheckboxControl,
    CheckboxSingleControl,
    InputControl,
    NumberInputControl,
    PercentComplete,
    RadioGroupControl,
    ResetButton,
    SelectControl,
    SliderControl,
    SubmitButton,
    SwitchControl,
    TextareaControl
} from "formik-chakra-ui";
import * as React from "react";
import * as Yup from "yup";

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values: any) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const EXPERTISE_OPTIONS = [
    'DeFi/PriFi',
    'GameFi/P2E',
    'Smart Contracts',
    'Privacy/Security',
    'Metaverse',
    'NFT Utility',
    'Auditing/Cryptanalysis/Bug Bounties',
    'Web3 ',
    'Algorithms/Automation/ML',
    'Databases',
]
const initialValues = {
    devSystems: 'devSystems',
    devExpertise: ['Metaverse'],
    devLanguages: 'devLanguages',
    devExperience: 'devExperience',
};

const validationSchema = Yup.object({
    devSystems: Yup.string().required(),
    devExpertise: Yup.array().min(1),
    devLanguages: Yup.string().required(),
    devExperience: Yup.string().required(),
});

const Form = () => {
    const onSubmit = (values: any) => {
        console.log("Submit: ", values);
    }
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, values, errors }) => (
                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                    onSubmit={handleSubmit as any}
                >
                    <Text fontSize='6xl'>Developer Sign Up</Text>
                    <Text p={4} fontSize='md'>Which languages or systems are you or your team most proficient in? Would you consider yourself either primarily a front end or backend Developer. Please outline any of your previous blockchain development experience.</Text>
                    <TextareaControl p={4} name="devSystems" />

                    <Text p={4} fontSize='md'>Select one or more of the following categories that represent your expertise (only select categories that you have extensive knowledge of.):</Text>
                    <CheckboxContainer p={4} name="devExpertise">
                        {EXPERTISE_OPTIONS.map(e => (
                            <CheckboxControl name="devExpertise" value={e}>
                                {e}
                            </CheckboxControl>
                        ))}
                    </CheckboxContainer>

                    <Text p={4} fontSize='md'>List the languages or systems you or your team is most proficient in:</Text>
                    <TextareaControl p={4} name="devLanguages" />

                    <Text p={4} fontSize='md'>Please outline any of your previous blockchain development experience and previous & current affiliations with any projects:</Text>
                    <TextareaControl p={4} name="devExperience" />

                    {/* <InputControl name="firstName" label="First Name" />
                    <InputControl name="lastName" label="Last Name" />
                    <NumberInputControl name="age" label="Last Name" />
                    <CheckboxSingleControl name="employed">
                        Employed
                    </CheckboxSingleControl>
                    <RadioGroupControl name="favoriteColor" label="Favorite Color">
                        <Radio value="#ff0000">Red</Radio>
                        <Radio value="#00ff00">Green</Radio>
                        <Radio value="#0000ff">Blue</Radio>
                    </RadioGroupControl>

                    <TextareaControl name="notes" label="Notes" />
                    <SwitchControl name="employedd" label="Employed" />
                    <SelectControl
                        name="select"
                        selectProps={{ placeholder: "Select option" }}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </SelectControl>
                    <SliderControl name="foo" sliderProps={{ max: 40 }} />

                    <PercentComplete /> */}
                    <ButtonGroup>
                        <SubmitButton>Submit</SubmitButton>
                        <ResetButton>Reset</ResetButton>
                    </ButtonGroup>

                    {/* <Box as="pre" marginY={10}>
                        {JSON.stringify(values, null, 2)}
                        <br />
                        {JSON.stringify(errors, null, 2)}
                    </Box> */}
                </Box>
            )}
        </Formik>
    );
};

export default Form;

// import * as React from "react"
// import {
//     ChakraProvider,
//     Box,
//     Text,
//     Link,
//     VStack,
//     Code,
//     Grid,
//     theme,
//     FormControl,
//     FormLabel,
//     FormErrorMessage,
//     Input,
//     Button,
//     Textarea,
// } from "@chakra-ui/react"
// import {
//     Formik,
//     FormikHelpers,
//     FormikProps,
//     Form,
//     Field,
//     FieldProps,
//     FieldInputProps,
// } from 'formik';
// import { InputControl, SelectControl, TextareaControl } from "formik-chakra-ui";
// import { GroupBase, OptionBase, Select } from "chakra-react-select";
// import { expertiseOptions } from './developerFormData';

// interface BaseOption extends OptionBase {
//     label: string;
//     value: string;
// }

// const EXPERTISE_OPTIONS = [{
//     label: "Expertise",
//     options: [
//         { value: 'DeFi/PriFi', label: 'DeFi/PriFi' },
//         { value: 'GameFi/P2E', label: 'GameFi/P2E' },
//         { value: 'Smart Contracts', label: 'Smart Contracts' },
//         { value: 'Privacy/Security', label: 'Privacy/Security' },
//         { value: 'Metaverse', label: 'Metaverse' },
//         { value: 'NFT Utility', label: 'NFT Utility' },
//         { value: 'Auditing/Cryptanalysis/Bug Bounties', label: 'Auditing/Cryptanalysis/Bug Bounties' },
//         { value: 'Web3 ', label: 'Web3 ' },
//         { value: 'Algorithms/Automation/ML', label: 'Algorithms/Automation/ML' },
//         { value: 'Databases', label: 'Databases' },
//     ]
// }];

// const initialValues = {
//     devSystems: 'devSystems',
//     devExpertise: ['Metaverse'],
//     devLanguages: 'devLanguages',
//     devExperience: 'devExperience',
// };

// const DeveloperForm = () => {
//     function validateName(value: string) {
//         let error
//         if (!value) {
//             error = 'Name is required'
//         } else if (value.toLowerCase() !== 'naruto') {
//             error = "Jeez! You're not a fan 😱"
//         }
//         return error
//     }

//     return (
//         <Formik
//             initialValues={initialValues}
//             onSubmit={(values, actions) => {
//                 setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2))
//                     actions.setSubmitting(false)
//                 }, 1000)
//             }}
//         >


//             {(props) => (
//                 <Form>
//                     <Text fontSize='6xl'>Developer Sign Up</Text>
//                     {/* <Text fontSize='xl'>Which languages or systems are you or your team most proficient in? Would you consider yourself either primarily a front end or backend Developer. Please outline any of your previous blockchain development experience.</Text> */}
//                     <Field name='devSystems' validate={validateName}>
//                         {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<{ name: string, surname: string }> }) => (
//                             <FormControl p={4} isInvalid={!form.errors.name && form.touched.name}>
//                                 <FormLabel htmlFor='devSystems'>
//                                     Which languages or systems are you or your team most proficient in? Would you consider yourself either primarily a front end or backend Developer. Please outline any of your previous blockchain development experience.
//                                 </FormLabel>
//                                 <Textarea {...field} id='devSystems' placeholder='devSystems' />
//                                 <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>

//                     <Field name='devExpertise' validate={validateName}>
//                         {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<{ name: string, surname: string }> }) => (
//                             <FormControl p={4}>
//                                 <FormLabel>
//                                     Select one or more of the following categories that represent your expertise (only select categories that you have extensive knowledge of.):                        
//                                 </FormLabel>
//                                 <Select<OptionBase, true, GroupBase<BaseOption>>
//                                     isMulti
//                                     name="colors"
//                                     options={expertiseOptions}
//                                     placeholder="Select at least one..."
//                                     closeMenuOnSelect={false}
//                                 />
//                             </FormControl>
//                         )}
//                     </Field>


//                     <Field name='devLanguages' validate={validateName}>
//                         {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<{ name: string, surname: string }> }) => (
//                             <FormControl p={4} isInvalid={!form.errors.name && form.touched.name}>
//                                 <FormLabel htmlFor='name'>
//                                     List the languages or systems you or your team is most proficient in:
//                                 </FormLabel>
//                                 <Textarea {...field} id='name' placeholder='name' />
//                                 <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>

//                     <Field name='devExperience' validate={validateName}>
//                         {({ field, form }: { field: FieldInputProps<string>, form: FormikProps<{ name: string, surname: string }> }) => (
//                             <FormControl p={4} isInvalid={!form.errors.name && form.touched.name}>
//                                 <FormLabel htmlFor='name'>
//                                     Please outline any of your previous blockchain development experience and previous & current affiliations with any projects:
//                                 </FormLabel>
//                                 <Textarea {...field} id='name' placeholder='name' />
//                                 <FormErrorMessage>{form.errors.name}</FormErrorMessage>
//                             </FormControl>
//                         )}
//                     </Field>

//                     {/* <TextareaControl name="firstName" label="First Name" /> */}

//                     {/* <Text fontSize='xl'>Select one or more of the following categories that represent your expertise (only select categories that you have extensive knowledge of.):</Text>
//                     <SelectControl
//                         name="expertise"
//                         selectProps={{ placeholder: "Select one or more options..." }}
//                     >
//                         {EXPERTISE_OPTIONS.map(e => (
//                             <option value={e}>{e}</option>
//                         ))}
//                     </SelectControl> */}

//                     <Button
//                         mt={4}
//                         colorScheme='teal'
//                         isLoading={props.isSubmitting}
//                         type='submit'
//                     >
//                         Submit
//                     </Button>
//                 </Form>
//             )}
//         </Formik>

//     )
// }

// export default DeveloperForm;