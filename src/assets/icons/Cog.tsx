import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from './interfaces';

const Cog = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={13 * scale} height={14 * scale} viewBox="0 0 13 14">
			<Path d="M30.491,16.161l-1.077-.645a5.233,5.233,0,0,0,0-1.84l1.077-.645a.322.322,0,0,0,.139-.367,6.589,6.589,0,0,0-1.382-2.479.3.3,0,0,0-.374-.06L27.8,10.77a4.731,4.731,0,0,0-1.537-.92V8.563a.312.312,0,0,0-.238-.307,6.132,6.132,0,0,0-2.76,0,.312.312,0,0,0-.238.307v1.29a4.881,4.881,0,0,0-1.537.92l-1.074-.645a.293.293,0,0,0-.374.06,6.549,6.549,0,0,0-1.382,2.479.319.319,0,0,0,.139.367l1.077.645a5.233,5.233,0,0,0,0,1.84l-1.077.645a.322.322,0,0,0-.139.367A6.589,6.589,0,0,0,20.04,19.01a.3.3,0,0,0,.374.06l1.077-.645a4.731,4.731,0,0,0,1.537.92v1.29a.312.312,0,0,0,.238.307,6.132,6.132,0,0,0,2.76,0,.312.312,0,0,0,.238-.307v-1.29a4.881,4.881,0,0,0,1.537-.92l1.077.645a.293.293,0,0,0,.374-.06,6.549,6.549,0,0,0,1.382-2.479A.329.329,0,0,0,30.491,16.161Zm-5.848.532a2.1,2.1,0,1,1,2.022-2.1A2.063,2.063,0,0,1,24.642,16.693Z" transform="translate(-18.132 -7.596)" fill="none" stroke={color} stroke-width="1"/>
		</Svg>
	);
};

export default Cog;
