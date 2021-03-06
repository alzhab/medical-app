import React, {ReactElement, useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '@styles/base';
import {IconProps} from './interfaces';

const Calendare = (props: IconProps): ReactElement => {
	const {colors} = useContext(ThemeContext);
	const scale = props.scale || 1;
	const color = props.color || colors.FONT_SECOND;
 
	return (
		<Svg width={12 * scale} height={12 * scale} viewBox="0 0 12 12">
			<Path d="M15.187,3.233h-.916V2.955a.478.478,0,0,0-.956,0v.291H11.191V2.955a.478.478,0,0,0-.956,0v.291H8.1V2.955a.478.478,0,0,0-.956,0v.291H6.227A1.5,1.5,0,0,0,4.7,4.7v8.349A1.5,1.5,0,0,0,6.227,14.5h8.947A1.5,1.5,0,0,0,16.7,13.047V4.685A1.471,1.471,0,0,0,15.187,3.233ZM6.24,4.142h.916v.291a.478.478,0,0,0,.956,0V4.142h2.137v.291a.478.478,0,0,0,.956,0V4.142h2.137v.291a.478.478,0,0,0,.956,0V4.142h.916A.576.576,0,0,1,15.8,4.7v.859H5.656V4.7A.567.567,0,0,1,6.24,4.142ZM15.187,13.6H6.24a.576.576,0,0,1-.584-.556V6.454h10.1v6.594A.555.555,0,0,1,15.187,13.6Z" transform="translate(-4.7 -2.5)" fill={color}/>
			<Path d="M22.073,41H20.818a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,22.073,41Z" transform="translate(-18.35 -36.208)" fill={color}/>
			<Path d="M66.759,41h-1.24a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.422.422,0,0,0,66.759,41Z" transform="translate(-57.215 -36.208)" fill={color}/>
			<Path d="M44.373,41H43.118a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,44.373,41Z" transform="translate(-37.739 -36.208)" fill={color}/>
			<Path d="M22.073,57.8H20.818a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,22.073,57.8Z" transform="translate(-18.35 -50.917)" fill={color}/>
			<Path d="M66.759,57.8h-1.24a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.422.422,0,0,0,66.759,57.8Z" transform="translate(-57.215 -50.917)" fill={color}/>
			<Path d="M44.373,57.8H43.118a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,44.373,57.8Z" transform="translate(-37.739 -50.917)" fill={color}/>
			<Path d="M22.073,74.7H20.818a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,22.073,74.7Z" transform="translate(-18.35 -65.988)" fill={color}/>
			<Path d="M66.759,74.7h-1.24a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.422.422,0,0,0,66.759,74.7Z" transform="translate(-57.215 -65.988)" fill={color}/>
			<Path d="M44.373,74.7H43.118a.419.419,0,0,0-.418.418v.447a.419.419,0,0,0,.418.418h1.255a.419.419,0,0,0,.418-.418v-.447A.419.419,0,0,0,44.373,74.7Z" transform="translate(-37.739 -65.988)" fill={color}/>
		</Svg>
	);
};

export default Calendare;
