import React, {useContext} from 'react';
import {AI} from '@components/atoms/Flex/interface';
import {Flex} from '@atoms';
import {ThemeContext} from '@styles/base';

const Indicators = (props: { active: number, count: number }) => {
  const {colors} = useContext(ThemeContext);
  
  return (
    <Flex dir={'row'} ai={AI.center}>
      {
        Array(props.count).fill('').map((_, index) => {
          const isActive = index + 1 === props.active;
          
          return (
            <Flex key={index} styles={{
              opacity: isActive ? 1 : 0.1,
              marginHorizontal: 3,
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: colors.PRIMARY
            }}/>
          );
        })
      }
    </Flex>
  );
};

export default Indicators;
