import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import { RouteProp } from '@react-navigation/native';

export interface NavigationProps {
  route: RouteProp<any, any>;
  navigation: StackNavigationProp<
    any,
    any
    >;
}
