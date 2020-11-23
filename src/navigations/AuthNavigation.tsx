import React, {ReactElement, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '@styles/base';
import {Navigations} from '@types';
import {Intro, Signin} from '@modules';

const AuthNavigations = [
	{
		name: Navigations.Intro,
		component: Intro
	},
	{
		name: Navigations.Signin,
		component: Signin
	}
];

const Stack = createStackNavigator();

const AuthNavigation = (): ReactElement => {
	const {showIntro} = useContext(ThemeContext);
	return (
		<Stack.Navigator headerMode={'none'} initialRouteName={showIntro ? Navigations.Intro : Navigations.Signin}>
			{
				AuthNavigations.map(route => (
					<Stack.Screen key={route.name} name={route.name} component={route.component} />
				))
			}
		</Stack.Navigator>
	);
};

export default AuthNavigation
