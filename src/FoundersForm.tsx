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
import timezones from 'timezones-list';

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
        console.log("TZ: ", timezones)
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
                    <Text fontSize='6xl'>Founders & Innovators</Text>
                    <Text p={4} fontSize='md'>In what stage is your project, blockchain business or Idea?</Text>

                    <RadioGroupControl size="lg" name="favoriteColor" style={{ textAlign: 'left', flexDirection: 'column' }}>
                        <Radio size='lg' value="1">Conceptualisation Phase - seeking partnerships, advisory, financing or developers to get the Idea/concept on the path to realization.</Radio>
                        <Radio size='lg' value="2">Early development, prototyping or pre-launch and looking for potential partners,  advisory or investment of financial and/or human capital.</Radio>
                        <Radio size='lg' value="3">Looking to further expand/market/develop an existing operational blockchain project through the use of potential partners, advisory or investment of financial and/or human capital.</Radio>
                        <Radio size='lg' value="4">Looking to merge projects, collaborate or sell existing partial or complete DeFi technology/innovations.</Radio>
                    </RadioGroupControl>

                    <Text p={4} fontSize='md'>Briefly explain your technology, project, or concept. Submit any and all additional questions you may have.</Text>
                    <Text p={4} fontSize='sm'>The level of detail provided will assist us in determining if and how the LinkerFi network can be of benefit to you. The information provided in this section will remain confidential, signing your wallet will act as proof of your submission ownership.</Text>
                    <TextareaControl p={4} name="devSystems" />

                    <Text fontSize='lg'>Where are you or your team primarily based?</Text>
                    <Text p={4} fontSize='sm'>This will help us arrange a time to contact you by connecting you to a team member in your timezone.</Text>
                    <SelectControl p={4}
                        name="select"
                        selectProps={{ placeholder: "Select A TimeZone" }}
                    >
                        {timezones.map(t => (
                        <option value={t.label}>{t.label}</option>
                        ))}
                    </SelectControl>

                    <Text p={4} fontSize='md'>Contact & Social</Text>
                    <Text p={4} fontSize='sm'>The more information that you provide will increase the likelihood of successful verification.</Text>
                    <InputControl p={4} name="name" label="Name"></InputControl>
                    <InputControl p={4} name="email" label="Email"></InputControl>
                    <InputControl p={4} name="telegram" label="Telegram"></InputControl>
                    <InputControl p={4} name="twitter" label="Twitter"></InputControl>
                    <InputControl p={4} name="linkedin" label="LinkedIn"></InputControl>
                    <InputControl p={4} name="github" label="GitHub"></InputControl>

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