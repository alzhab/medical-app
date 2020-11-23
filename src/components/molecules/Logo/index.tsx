import React, {ReactElement, useContext} from 'react';
import {Flex, Text} from '@atoms';
import {AI} from '@components/atoms/Flex/interface';
import LogoSVG from '@assets/images/logo.svg';
import LogoLightSVG from '@assets/images/logo_light.svg';
import {scaleSize} from '@styles/mixins';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {LogoProps} from './interfaces';

const Logo = (props: LogoProps): ReactElement => {
  const {colors} = useContext(ThemeContext);
  
  return (
    <Flex ai={AI.center}>
      {props.light ? <LogoLightSVG/> : <LogoSVG/>}
      
      <Text styles={{marginTop: scaleSize(20)}} color={props.light ? colors.SECOND_BG : colors.PRIMARY}
            family={TextFamily.BLACK} size={TextSize.xlarge}>
        Medical <Text color={props.light ? colors.SECOND_BG : colors.PRIMARY} family={TextFamily.LIGHT}
                      size={TextSize.xlarge}>App</Text>
      </Text>
    </Flex>
  );
};

export default Logo;
