import React, {ReactElement, useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {ThemeContext} from '@styles/base';
import {CustomDrawer} from '@organisms';
import {Navigations} from '@types';
import {Appointments, Forum, MedicalRecords, NewAppointment, Settings, Stats} from '@modules';
import {Calendare, Cog, Message, Page, Plus, Statistic} from '@icons';


const DrawerNavigations = [
	{
		name: Navigations.Appointments,
		component: Appointments,
		icon: Calendare,
		title: 'My Appointments',
	},
	{
		name: Navigations.NewAppointments,
		component: NewAppointment,
		icon: Plus,
		title: 'New Appointment',
	},
	{
		name: Navigations.MedicalRecords,
		component: MedicalRecords,
		icon: Page,
		title: 'Medical Records',
	},
	{
		name: Navigations.Forum,
		component: Forum,
		icon: Message,
		title: 'Forum',
	},
	{
		name: Navigations.Stats,
		component: Stats,
		icon: Statistic,
		title: 'Statistics',
	},
	{
		name: Navigations.Settings,
		component: Settings,
		icon: Cog,
		title: 'Settings',
	},
];

const Drawer = createDrawerNavigator();

const DrawerNavigation = (): ReactElement => {
	const {colors} = useContext(ThemeContext);
 
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			drawerStyle={{
				backgroundColor: colors.SECOND_BG
			}}
			drawerContentOptions={{
				activeTintColor: colors.SECOND_BG,
				activeBackgroundColor: colors.PRIMARY,
			}}
		>
			{
				DrawerNavigations.map(route => (
					<Drawer.Screen options={{
					  title: route.title,
					  drawerIcon: (props: {focused: boolean}): ReactElement => {
					    const Icon = route.icon;
					    
					    return (
					      <Icon color={props.focused ? colors.SECOND_BG : colors.PRIMARY} scale={1.5} />
							)
						}
					}} key={route.name} name={route.name} component={route.component} />
				))
			}
		</Drawer.Navigator>
	);
};

export default DrawerNavigation
