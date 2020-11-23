import React, {ReactElement, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '@styles/base';
import {Navigations} from '@types';
import DrawerNavigation from './DrawerNavigation';
import {DoctorDetail, Notifications} from '@modules';

const MainNavigations = [
	{
		name: Navigations.Drawer,
		component: DrawerNavigation
	},
	{
		name: Navigations.Notifications,
		component: Notifications
	},
	{
		name: Navigations.DoctorInfo,
		component: DoctorDetail
	}
];



const Stack = createStackNavigator();

const MainNavigation = (): ReactElement => {
	const {showIntro} = useContext(ThemeContext);
	return (
		<Stack.Navigator headerMode={'none'} initialRouteName={showIntro ? Navigations.Intro : Navigations.Signin}>
			{
				MainNavigations.map(route => (
					<Stack.Screen key={route.name} name={route.name} component={route.component} />
				))
			}
		</Stack.Navigator>
	);
};

export default MainNavigation
