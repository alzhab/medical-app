import React, {Component, ReactElement} from 'react';
import {Flex} from '@atoms';
import {Header} from '@molecules';
import {DoctorCard} from '@organisms'
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import {scaleSize} from '@styles/mixins';
import {Form, ListHeader} from './components';
import {ScrollView} from 'react-native';

class NewAppointment extends Component {
	render(): ReactElement {
		return (
			<Flex full size={1}>
				<Header title={'Book an appointment'}/>
    
				<Flex full size={1} styles={{
					paddingHorizontal: CONTAINER_HOR_PADDING,
					marginTop: scaleSize(20)
				}}>
					<Form/>
     
					<Flex full size={1}>
						<ListHeader/>
      
						<Flex full size={1}>
							<ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
								<DoctorCard/>
								<DoctorCard/>
								<DoctorCard/>
							</ScrollView>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		);
	}
}

export default NewAppointment;
