import React, {ReactElement, useContext} from 'react';
import {AI, JC} from '@components/atoms/Flex/interface';
import {Flex, Text} from '@atoms';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {boxShadow, scaleSize} from '@styles/mixins';
import {Button, Image, Rating} from '@molecules';
import {Navigations} from '@types';
import {useNavigation} from '@react-navigation/native';

const NotificationCard = (): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const navigation = useNavigation();
 
	return (
		<Flex full ai={AI.center} styles={{marginBottom: scaleSize(20)}}>
			<Flex full>
				<Text size={TextSize.large} family={TextFamily.BOLD}>Heartbeat Anomaly</Text>
			</Flex>
   
			<Flex full styles={{
				backgroundColor: colors.SECOND_BG,
				borderRadius: scaleSize(10),
				paddingHorizontal: 15,
				paddingVertical: 10,
				marginTop: scaleSize(30),
				marginBottom: scaleSize(20),
				...boxShadow()
			}}>
				<Text size={TextSize.large}>
          Dear patient,
				</Text>
				<Text size={TextSize.large}>
          There is a heartbeat anomaly that has been recorded, and you should book a visit with a specialist as soon as
          possible.
				</Text>
			</Flex>
   
			<Flex dir={'row'} ai={AI.stretch}>
				<Flex styles={{
					width: scaleSize(70),
					height: scaleSize(70),
					borderRadius: 8,
					overflow: 'hidden',
					marginRight: scaleSize(13)
				}}>
					<Image
						style={{width: '100%', height: '100%'}}
						source={require('@assets/images/profile.jpg')}
						resizeMode={'cover'}
					/>
				</Flex>
    
				<Flex jc={JC.center} styles={{marginBottom: scaleSize(40)}}>
					<Text family={TextFamily.BOLD}>Dr. Martin Pilier</Text>
					<Flex styles={{marginVertical: 5}}>
						<Text color={colors.FONT_SECOND}>Cardiologist</Text>
						<Text color={colors.FONT_SECOND}>Luxembourg Ville - 2 km</Text>
					</Flex>
					<Rating rating={5} count={213}/>
				</Flex>
			</Flex>
   
			<Button full size={TextSize.large} click={() => navigation.navigate(Navigations.NewAppointments)} title={'Book' +
      ' a visit'}/>
		</Flex>
	);
};

export default NotificationCard;
