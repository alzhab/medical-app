import React, {ReactElement, useContext} from 'react';
import {Flex, Text} from '@atoms';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {getStyles} from './styles';
import {AI, JC} from '@components/atoms/Flex/interface';
import {scaleSize} from '@styles/mixins';
import {Info, Pen} from '@icons';
import {Button} from '@molecules';
import {ButtonTypes} from '@components/molecules/Button/interfaces';
import {Props} from './interfaces';

const AppointmentsCard = (props: Props): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const styles = getStyles(colors);
 
	return (
		<Flex full styles={styles.card}>
			<Text color={colors.FONT_SECOND}>09/04/2020</Text>
   
			<Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{marginTop: scaleSize(5)}}>
				<Flex dir={'row'} ai={AI.center}>
					<Text styles={{marginRight: scaleSize(5)}} size={TextSize.large} family={TextFamily.BOLD}>
            Dentist - Clara Odding
					</Text>
					<Info color={colors.PRIMARY} scale={1.2}/>
				</Flex>
    
				{
					!props.cantModify ? (
						<Button
							family={TextFamily.BOLD}
							click={() => {
							}}
							type={ButtonTypes.EMPTY}
							empty
							size={TextSize.large}
							color={colors.PRIMARY}
						>
							<Flex dir={'row'} ai={AI.center}>
								<Pen color={colors.PRIMARY} scale={1.2}/>
								<Text
									styles={{marginLeft: 5}}
									color={colors.PRIMARY}
									size={TextSize.large}
									family={TextFamily.BOLD}
								>Modify</Text>
							</Flex>
						</Button>) : null
				}
			</Flex>
		</Flex>
	);
};

export default AppointmentsCard;
