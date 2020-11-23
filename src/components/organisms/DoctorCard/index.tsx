import React, {ReactElement, useContext} from 'react';
import {Flex, Text} from '@atoms';
import {TextFamily, ThemeContext} from '@styles/base';
import {getStyles} from './styles';
import {AI, JC} from '@components/atoms/Flex/interface';
import {scaleSize} from '@styles/mixins';
import {Dots} from '@icons';
import {Image, Rating} from '@molecules';
import {Props} from './interfaces';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Navigations} from '@types';

const DoctorCard = (props: Props): ReactElement => {
  const {colors} = useContext(ThemeContext);
  const styles = getStyles(colors);
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate(Navigations.DoctorInfo)}>
      <Flex full styles={styles.card}>
        <Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{marginTop: scaleSize(5)}}>
          <Flex dir={'row'} ai={AI.stretch}>
            <Flex styles={styles.image}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('@assets/images/profile.jpg')}
                resizeMode={'cover'}
              />
            </Flex>
            
            <Flex jc={JC.center}>
              <Text family={TextFamily.BOLD}>Dr. Martin Pilier</Text>
              <Flex styles={{marginVertical: 7}}>
                <Text color={colors.FONT_SECOND}>Cardiologist</Text>
                <Text color={colors.FONT_SECOND}>Luxembourg Ville - 2 km</Text>
              </Flex>
              <Rating rating={5} count={213}/>
            </Flex>
          </Flex>
          
          <TouchableOpacity onPress={() => {
          }}>
            <Dots color={colors.FONT} scale={2}/>
          </TouchableOpacity>
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
};

export default DoctorCard;
