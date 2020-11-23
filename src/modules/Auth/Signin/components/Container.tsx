import React, {ReactElement, useContext} from 'react';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {Flex, Text} from '@atoms';
import {AI, JC} from '@components/atoms/Flex/interface';
import {Logo} from '@molecules';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {ContainerProps} from '../interfaces';

const Container = (props: ContainerProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
 
	return (
		<Flex size={1} full styles={{paddingHorizontal: CONTAINER_HOR_PADDING}}>
			<Flex size={1}/>
			
			<Flex size={2.5} full ai={AI.center} jc={JC.spaceBetween}>
				<Logo/>
    
				<Flex ai={AI.center} full styles={{marginTop: scaleSize(15)}}>
					<Text styles={{marginBottom: 10}} color={colors.FONT_THIRD} family={TextFamily.BOLD}
						size={TextSize.extraLarge}>{props.title}</Text>
					<Text color={colors.FONT} family={TextFamily.REGULAR} size={TextSize.large}>{props.desc}</Text>
     
					<Flex full styles={{marginTop: scaleSize(40)}}>
						{props.children}
					</Flex>
				</Flex>
			</Flex>
			<Flex size={2}/>
		</Flex>
	);
};

export default Container;
