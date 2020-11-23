import React, {ReactElement, useCallback, useContext, useRef, useState} from 'react';
import {Flex, Text} from '@atoms';
import {Button, Logo} from '@molecules';
import {AI, JC} from '@components/atoms/Flex/interface';
import {TextFamily, TextSize, ThemeContext} from '@styles/base';
import Intro1 from '@assets/images/intro_1.svg';
import Intro2 from '@assets/images/intro_2.svg';
import Intro3 from '@assets/images/intro_3.svg';
import {TextAlign} from '@components/atoms/Text/interfaces';
import {ButtonTypes} from '@components/molecules/Button/interfaces';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {Indicators} from './components';
import {SlideInterface} from './interfaces';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Navigations} from '@types';

const Intro = (): ReactElement => {
  const {colors, hideIntro} = useContext(ThemeContext);
  const [activeSlide, setActiveSlide] = useState(1);
  const flatlistRef = useRef<any>(null);
  const navigation = useNavigation();
  const slides: SlideInterface[] = [
    {
      Image: Intro1,
      title: 'Find your Doctor'
    },
    {
      Image: Intro2,
      title: 'Storage your Medical Records'
    },
    {
      Image: Intro3,
      title: 'Discuss in the Forum'
    }
  ];
  
  const skip = () => {
    hideIntro();
    navigation.navigate(Navigations.Signin);
  };
  
  const nextSlide = () => {
    if (activeSlide !== 3) {
      flatlistRef.current.scrollToIndex({animated: true, index: activeSlide});
    } else {
      skip();
    }
  };
  
  const onViewableItemsChanged = useCallback(({changed}) => {
    const index = changed[0].index + 1;
    if (index !== activeSlide - 1) {
      setActiveSlide(index);
    }
  }, []);
  
  
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Flex size={2} jc={JC.center}>
        <Logo/>
      </Flex>
      
      <FlatList
        ref={flatlistRef}
        horizontal
        style={{marginBottom: -50, position: 'relative', zIndex: 2}}
        decelerationRate="fast"
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
        snapToAlignment={'center'}
        snapToInterval={WINDOW_WIDTH}
        contentContainerStyle={{justifyContent: 'center'}}
        onViewableItemsChanged={onViewableItemsChanged}
        showsHorizontalScrollIndicator={false} data={slides}
        renderItem={({item}: { item: SlideInterface }) => {
          const Image = item.Image;
          
          return (
            <Flex styles={{width: WINDOW_WIDTH, position: 'relative'}} size={2.5} jc={JC.spaceBetween} ai={AI.center}>
              <Flex styles={{width: '50%'}} jc={JC.center} ai={AI.center}>
                <Text textAlign={TextAlign.center} color={colors.FONT_THIRD} family={TextFamily.BOLD}
                      size={TextSize.extraLarge}>{item.title}</Text>
              </Flex>
              
              <Image/>
            </Flex>
          );
        }} keyExtractor={(_, index) => index.toString()}/>
      
      <Flex full size={1.5} jc={JC.flexEnd} styles={{backgroundColor: colors.SECOND_BG, paddingBottom: scaleSize(25)}}>
        <Flex full ai={AI.center} jc={JC.spaceBetween} dir={'row'}>
          <Button click={() => skip()} title={'Skip'} color={colors.PRIMARY} type={ButtonTypes.EMPTY}/>
          <Indicators count={slides.length} active={activeSlide}/>
          <Button click={() => nextSlide()} title={'Next'} color={colors.PRIMARY} type={ButtonTypes.EMPTY}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Intro;
