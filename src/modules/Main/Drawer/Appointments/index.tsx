import React, {Component, ReactElement} from 'react';
import {Flex} from '@atoms';
import {Button, Header, SearchInput, Tabs} from '@molecules';
import {AppointmentCard} from '@organisms';
import {styles} from './styles';
import {Tab} from '@components/molecules/Tabs/interfaces';
import {State} from './interfaces';
import {FlatList} from 'react-native';
import {TextSize} from '@styles/base';
import {Navigations} from '@types';
import {NavigationProps} from '@types';
import {AI, JC} from '@components/atoms/Flex/interface';

const appointments = Array(10).fill('');

class Appointments extends Component<NavigationProps> {
  state: State = {
  	activeTab: 0
  };
  
  tabs: Tab[] = [
  	{
  		label: 'Upcoming',
  		content: (
  			<Flex full size={1}>
  				<FlatList
  					showsVerticalScrollIndicator={false}
  					style={{width: '100%'}}
  					contentContainerStyle={{width: '100%'}}
  					keyExtractor={(_, index) => index.toString()}
  					data={appointments}
  					renderItem={() => (
  						<AppointmentCard/>
  					)}/>
  			</Flex>
  		)
  	},
  	{
  		label: 'Past',
  		content: (
  			<Flex full>
  				<FlatList
  					showsVerticalScrollIndicator={false}
  					style={{width: '100%'}}
  					contentContainerStyle={{width: '100%'}}
  					keyExtractor={(_, index) => index.toString()}
  					data={appointments}
  					renderItem={() => (
  						<AppointmentCard cantModify/>
  					)}/>
  			</Flex>
  		)
  	}
  ];
  
  changeActiveTab(num: number) {
  	this.setState({activeTab: num});
  }
  
  render(): ReactElement {
  	return (
  		<Flex full size={1}>
  			<Flex>
  				<Header title={'My Appointments'}/>
  			</Flex>
     
  			<Flex size={1} full styles={styles.container}>
  				<Flex size={0.3} ai={AI.center} jc={JC.center}>
  					<SearchInput value={''} onChange={() => {}}/>
  				</Flex>
      
  				<Flex
  					size={1}
  					full
  					styles={styles.content}>
       
  					<Flex size={1} full>
  						<Tabs
  							changeActiveTab={this.changeActiveTab.bind(this)}
  							activeTab={this.state.activeTab}
  							tabs={this.tabs}
  						/>
  					</Flex>
       
  					<Flex size={0.2} full jc={JC.center} ai={AI.center}>
  						<Button
  							size={TextSize.xlarge}
  							full
  							click={() => this.props.navigation.navigate(Navigations.NewAppointments)}
  							title={'Book a new appointment'}
  						/>
  					</Flex>
  				</Flex>
  			</Flex>
  		</Flex>
  	);
  }
}

export default Appointments;
