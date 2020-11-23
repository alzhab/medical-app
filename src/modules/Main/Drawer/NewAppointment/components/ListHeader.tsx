import React, {ReactElement, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {JC} from '@components/atoms/Flex/interface';
import {scaleSize} from '@styles/mixins';
import {TextSize, ThemeContext} from '@styles/base';
import {Filter} from '@icons';
import {Flex, Text} from '@atoms';

const ListHeader = (): ReactElement => {
	const {colors} = useContext(ThemeContext);
 
	return (
		<Flex full dir={'row'} jc={JC.spaceBetween} styles={{marginBottom: scaleSize(16)}}>
			<Text size={TextSize.large}>All Specialities</Text>
			<TouchableOpacity onPress={() => {
			}}>
				<Filter scale={2} color={colors.PRIMARY}/>
			</TouchableOpacity>
		</Flex>
	);
};

export default ListHeader;
