import React, {Component, ReactElement} from 'react';
import {Flex} from '@atoms';
import {Header, SearchInput, Tabs} from '@molecules';
import {MedicalRecordCard} from '@organisms';
import {styles} from './styles';
import {Tab} from '@components/molecules/Tabs/interfaces';
import {State} from './interfaces';
import {FlatList} from 'react-native';
import {NavigationProps} from '@types';

const appointments = Array(5).fill('');

class MedicalRecords extends Component<NavigationProps> {
  state: State = {
  	activeTab: 0
  };
  
  tabs: Tab[] = [
  	{
  		label: 'Clinics',
  		content: (
  			<Flex full>
  				<FlatList
  					style={{width: '100%'}}
  					contentContainerStyle={{width: '100%'}}
  					keyExtractor={(_, index) => index.toString()}
  					data={appointments}
  					renderItem={() => (
  						<MedicalRecordCard/>
  					)}/>
  			</Flex>
  		)
  	},
  	{
  		label: 'Lab tests',
  		content: (
  			<Flex full>
  				<FlatList
  					style={{width: '100%'}}
  					contentContainerStyle={{width: '100%'}}
  					keyExtractor={(_, index) => index.toString()}
  					data={appointments}
  					renderItem={() => (
  						<MedicalRecordCard/>
  					)}/>
  			</Flex>
  		)
  	},
  	{
  		label: 'Medicines',
  		content: (
  			<Flex full>
  				<FlatList
  					style={{width: '100%'}}
  					contentContainerStyle={{width: '100%'}}
  					keyExtractor={(_, index) => index.toString()}
  					data={appointments}
  					renderItem={() => (
  						<MedicalRecordCard/>
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
  			<Header title={'Medical Records'}/>
     
  			<Flex full styles={styles.container}>
  				<SearchInput value={''} onChange={() => {
  				}}/>
      
  				<Flex
  					full
  					styles={styles.content}>
  					<Tabs
  						changeActiveTab={this.changeActiveTab.bind(this)}
  						activeTab={this.state.activeTab}
  						tabs={this.tabs}/>
  				</Flex>
  			</Flex>
  		</Flex>
  	);
  }
}

export default MedicalRecords;
