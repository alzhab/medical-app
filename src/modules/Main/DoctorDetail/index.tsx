import React, {Component, ReactElement} from 'react';
import {Container, Flex} from '@atoms';
import {Header} from '@molecules';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import DoctorInfo from './components/DoctorInfo';

class DoctorDetail extends Component {
	render(): ReactElement {
		return (
			<Flex full size={1}>
				<Header back />
    
				<Container>
					<DoctorInfo/>
				</Container>
			</Flex>
		);
	}
}

export default DoctorDetail;
