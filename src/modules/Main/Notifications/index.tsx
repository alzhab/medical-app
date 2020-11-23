import React, {Component, ReactElement} from 'react';
import {Flex} from '@atoms';
import {Header} from '@molecules';
import {NotificationCard} from '@organisms'
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {scaleSize} from '@styles/mixins';
import {NavigationProps} from '@types';
import {ScrollView} from 'react-native';

class Notification extends Component<NavigationProps> {
 
	render(): ReactElement {
		return (
			<Flex full size={1}>
				<Header back hideNot/>
    
				<Flex size={1} full styles={{paddingHorizontal: CONTAINER_HOR_PADDING, marginTop: scaleSize(30)}}>
					<ScrollView style={{width: '100%'}}>
						<NotificationCard/>
					</ScrollView>
				</Flex>
			</Flex>
		);
	}
}

export default Notification;
