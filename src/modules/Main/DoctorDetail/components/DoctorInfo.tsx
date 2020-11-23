import React, {useContext} from 'react';
import {scaleSize} from '@styles/mixins';
import {Flex, Text} from '@atoms';
import {AI, JC} from '@components/atoms/Flex/interface';
import {Image, Rating} from '@molecules';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {getStyles} from '../styles';

const DoctorInfo = () => {
  const {colors} = useContext(ThemeContext);
  const styles = getStyles(colors);
  
  return (
    <Flex size={1} full styles={{marginTop: scaleSize(35)}}>
      <Flex dir={'row'} ai={AI.stretch}>
        <Flex styles={styles.detailImage}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('@assets/images/profile.jpg')}
            resizeMode={'cover'}
          />
        </Flex>
      
        <Flex jc={JC.spaceAround} ai={AI.stretch}>
          <Text family={TextFamily.BOLD} size={TextSize.xlarge}>Dr. Martin Pilier</Text>
          <Flex styles={{marginVertical: 7}}>
            <Text color={colors.FONT_SECOND} size={TextSize.xlarge}>Cardiologist</Text>
            <Text color={colors.FONT_SECOND} size={TextSize.xlarge}>Luxembourg Ville - 2 km</Text>
          </Flex>
          <Rating size={1.5} rating={5} count={25} textSize={TextSize.large}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DoctorInfo;
