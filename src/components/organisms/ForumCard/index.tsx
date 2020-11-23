import React, {ReactElement, useContext} from 'react';
import {Flex, Text} from '@atoms';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import {getStyles} from './styles';
import {AI, JC} from '@components/atoms/Flex/interface';
import {scaleSize} from '@styles/mixins';
import {ArrowRight, Message} from '@icons';
import {Button} from '@molecules';
import {ButtonTypes} from '@components/molecules/Button/interfaces';
import {Props} from './interfaces';

const ForumCard = (props: Props): ReactElement => {
  const {colors} = useContext(ThemeContext);
  const styles = getStyles(colors);
  
  return (
    <Flex full styles={styles.card}>
      <Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{marginTop: scaleSize(5)}}>
        <Text color={colors.FONT_SECOND}>09/04/2020</Text>
        
        <Flex dir={'row'} ai={AI.center}>
          <Message scale={1.5}/>
          <Text styles={{marginLeft: 5}} color={colors.FONT_SECOND}>20</Text>
        </Flex>
      </Flex>
      
      <Flex dir={'row'} full ai={AI.center} jc={JC.spaceBetween} styles={{marginTop: scaleSize(5)}}>
        <Flex dir={'row'} ai={AI.center}>
          <Text styles={{marginRight: scaleSize(5)}} size={TextSize.large} family={TextFamily.BOLD}>
            Cardiologie et circulation
          </Text>
        </Flex>
        
        <Button
          family={TextFamily.BOLD}
          click={() => {
          }}
          type={ButtonTypes.EMPTY}
          empty
          size={TextSize.large}
          color={colors.PRIMARY}
        >
          <Flex dir={'row'} ai={AI.center}>
            <Text
              styles={{marginRight: 5}}
              color={colors.PRIMARY}
              size={TextSize.large}
              family={TextFamily.BOLD}
            >See more</Text>
            <ArrowRight color={colors.PRIMARY} scale={1.2}/>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ForumCard;
