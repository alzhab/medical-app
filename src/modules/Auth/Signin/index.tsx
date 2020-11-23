import React, {ReactElement, useState} from 'react';
import {Container, MobileForm} from './components';
import {StepInterface} from './interfaces';
import Verification from './components/VerificationForm';
import {useNavigation} from '@react-navigation/native';
import {Navigations} from '@types';

const Signin = (): ReactElement => {
	const [activeStep, setActiveStep] = useState(0);
	const navigation = useNavigation();
	const steps: StepInterface[] = [
		{
			title: 'Mobile Number',
			desc: 'The code will be sent to the full mobile number',
			Form: MobileForm,
			onSubmit: (phoneNumber: string) => {
				setActiveStep(1);
			}
		},
		{
			title: 'Verification',
			desc: 'Insert your code here:',
			Form: Verification,
			onSubmit: (code: string) => {
				navigation.navigate(Navigations.Main);
			}
		}
	];
 
	const {title, desc, Form, onSubmit} = steps[activeStep];
 
	return (
		<Container title={title} desc={desc}>
			<Form onSubmit={onSubmit.bind(this)}/>
		</Container>
	);
};

export default Signin;
