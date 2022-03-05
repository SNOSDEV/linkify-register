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
import Moralis from 'moralis';
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();

    const onSubmit = (values: any) => {
        console.log("TZ: ", timezones)
        console.log("Submit: ", values);

        const InvestorInterest = Moralis.Object.extend("InvestorInterest");
        const investorInterest = new InvestorInterest();
        
        Object.keys(values).map((k: string) => {
            investorInterest.set(k, values[k]);
        })

        console.log("Saving inv == ", investorInterest);
        investorInterest.save();
        navigate("/success", { replace: true });
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
                    <Text fontSize='6xl'>Investors</Text>

                    <Text p={4} fontSize='md'>Select one of the following which best describes your situation:</Text>
                    <RadioGroupControl size="lg" name="favoriteColor" style={{ textAlign: 'left', flexDirection: 'column' }}>
                        <Radio size='lg' value="1"><strong>Angel/Seed Investor - </strong> High-net worth individuals who invest their own capital in early-stage startups and entrepreneurs, predominantly funding the whole (or majority of the) project.</Radio>
                        <Radio size='lg' value="2"><strong>Venture Capitalist -</strong> Groups or Fund Managers, or those who invest Funds Under Management (FUM) in early-stage startups and entrepreneurs/projects.</Radio>
                        <Radio size='lg' value="3"><strong>Sophisticated /DeFi / PriFi - </strong> Individuals with experience & expertise in providing funding to projects.</Radio>
                        <Radio size='lg' value="4"><strong>Introducer - </strong> Individual or group who can facilitate a connection to funding from any of the above.</Radio>
                    </RadioGroupControl>

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

                    <Text p={4} fontSize='md'>Share a brief description about your professional background, Investing/business History:</Text>
                    <TextareaControl p={4} name="devSystems" />

                    <Text p={4} fontSize='md'>Are you interested in becoming an Involved or Passive investor?</Text>
                    <RadioGroupControl size="lg" name="favoriteColor" style={{ textAlign: 'left', flexDirection: 'column' }}>
                        <Radio size='lg' value="involved">Involved</Radio>
                        <Radio size='lg' value="passive">Passive</Radio>
                    </RadioGroupControl>

                    <Text p={4} fontSize='md'>How did you hear about us? Please list your referrer or LinkerFi Rep to fastrack verification:</Text>
                    <InputControl p={4} name="referrer"></InputControl>

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