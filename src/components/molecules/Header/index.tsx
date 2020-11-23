import React, {ReactElement, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '@atoms';
import {AI, JC} from '@components/atoms/Flex/interface';
import {Account, ArrowLeft, Burger} from '@icons';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {Props} from './interfaces';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Navigations} from '@types';
import {getStyles} from './styles';
import {TextAlign} from '@components/atoms/Text/interfaces';

const Header = (props: Props): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const Icon = props.back ? ArrowLeft : Burger;
	const navigation = useNavigation();
	const styles = getStyles(colors);
	const iconClicked = () => {
		if (props.back) {
			navigation.goBack();
		} else {
			navigation.dispatch(DrawerActions.toggleDrawer());
		}
	};
 
	return (
		<Flex full
			styles={
				[
					{
						backgroundColor: props.back ? 'transparent' : colors.SECOND_BG,
						paddingBottom: props.back ? 0 : scaleSize(30)
					},
					styles.header
				]
			}
		>
			<Flex dir={'row'} full jc={JC.spaceBetween}>
				<TouchableOpacity onPress={() => iconClicked()}>
					<Icon color={colors.FONT_THIRD} scale={2}/>
				</TouchableOpacity>
    
				{
					props.hideNot ? null : (
						<TouchableOpacity style={styles.notContainer}
							onPress={() => navigation.navigate(Navigations.Notifications)}>
							<Flex ai={AI.center} jc={JC.center} styles={styles.notNum}><Text size={TextSize.small}
								textAlign={TextAlign.center}
								color={colors.SECOND_BG}>1</Text>
							</Flex>
							<Account color={colors.FONT_THIRD} scale={2.5}/>
						</TouchableOpacity>
					)
				}
			</Flex>
   
			{
				props.back ? null :
					<Text size={TextSize.extraLarge} styles={{marginTop: scaleSize(14)}} color={colors.FONT_THIRD}
						family={TextFamily.BOLD}>{props.title || ''}</Text>
			}
		</Flex>
	);
};

export default Header;
