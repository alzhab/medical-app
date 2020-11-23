import React, {ReactElement} from 'react';
import {scaleSize} from '@styles/mixins';
import {Input} from '@organisms';
import {Calendare, Location, Search} from '@icons';
import {Button} from '@molecules';
import {TextSize} from '@styles/base';
import {Flex} from '@atoms';

const Form = (): ReactElement => {
	return (
		<Flex full styles={{marginBottom: scaleSize(25)}}>
			<Input
				placeholder={'Doctor, Specialities …'}
				onChange={() => {
				}}
				Icon={Search}
			/>
			<Input
				placeholder={'Select Area'}
				onChange={() => {
				}}
				Icon={Location}
			/>
			<Input
				placeholder={'Select Date'}
				onChange={() => {
				}}
				Icon={Calendare}
			/>
			<Button
				full
				click={() => {
				}}
				title={'Search'}
				size={TextSize.large}/>
		</Flex>
	);
};

export default Form;
