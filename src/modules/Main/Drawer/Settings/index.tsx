import React, {Component, ReactElement} from 'react';
import {Container, Flex, Text} from '@atoms';
import {Header} from '@molecules';
import {ChangeColorsIN, defaultColors, TextFamily, TextSize, ThemeContext} from '@styles/base';
import {scaleSize} from '@styles/mixins';
import {JC} from '@components/atoms/Flex/interface';
import {TouchableOpacity} from 'react-native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';

class Settings extends Component {
  static contextType = ThemeContext;
  
  render(): ReactElement {
  	const {changeColors} = this.context;
   
  	const themes = [
  		{
  			...defaultColors,
  			PRIMARY: '#2A2AC0',
  		},
  		{
  			...defaultColors,
  			PRIMARY: '#2ecc71',
  		},
  		{
  			...defaultColors,
  			MAIN_BG: '#b28181',
  			SECOND_BG: '#ffc4bc',
  			PRIMARY: '#e74c3c',
  			FONT: '#fff',
  			FONT_SECOND: '#dddddd',
  			FONT_THIRD: '#4b1d13',
  		},
  		{
  			...defaultColors,
  			PRIMARY: '#000',
  		},
  		{
  			PRIMARY: '#fff',
  			MAIN_BG: '#42434b',
  			FONT_SECOND: '#dddddd',
  			SECOND_BG: '#000',
  			FONT: '#fff',
  			BORDER_COLOR: '#3731ed',
  			FONT_THIRD: '#3731ed',
  		}
  	];
   
  	return (
  		<Flex full size={1}>
  			<Header title={'Settings'}/>
     
  			<Container top={30}>
  				<Text family={TextFamily.BOLD} size={TextSize.large} styles={{marginBottom: scaleSize(20)}}>Choose
            theme</Text>
          
  				<Flex full dir={'row'} wrap>
  					{
  						themes.map((theme, index) => (
  						  <TouchableOpacity key={index.toString()} onPress={() => {changeColors(theme)}}>
  								<Flex styles={{backgroundColor: theme.PRIMARY, width: 50, height: 50, borderRadius: 50, marginHorizontal: CONTAINER_HOR_PADDING / 2, marginBottom: CONTAINER_HOR_PADDING / 2}} />
  							</TouchableOpacity>
  						))
  					}
  				</Flex>
  			</Container>
  		</Flex>
  	);
  }
}

export default Settings;
