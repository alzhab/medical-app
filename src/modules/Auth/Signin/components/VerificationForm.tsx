import React, {useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FormProps} from '../interfaces';
import {Flex} from '@atoms';
import {SmsInput} from '@organisms';
import {Button} from '@molecules';
import {scaleSize} from '@styles/mixins';
import {TextSize} from '@styles/base';
import {JC} from '@components/atoms/Flex/interface';
import {errorMessages} from '@utils';

const Verification = (props: FormProps) => {
  const {control, handleSubmit, watch, getValues} = useForm();
  const sms1 = useRef<any>();
  const sms2 = useRef<any>();
  const sms3 = useRef<any>();
  const sms4 = useRef<any>();
  
  useEffect(() => {
    sms1.current.focus();
  }, []);
  
  const onSubmit = () => {
    const {sms_1, sms_2, sms_3, sms_4} = getValues();
    
    props.onSubmit([sms_1, sms_2, sms_3, sms_4].join(''));
  };
  
  return (
    <>
      <Flex full dir="row" jc={JC.spaceBetween}>
        <Controller
          name="sms_1"
          defaultValue=""
          rules={{required: errorMessages.required}}
          control={control}
          render={({onChange, value}) => (
            <SmsInput
              customRef={sms1}
              onChange={(text) => {
                onChange(text);
                if (text.length) {
                  sms2.current.focus();
                }
              }}
              value={value}
            />
          )}
        />
        
        <Controller
          name="sms_2"
          defaultValue=""
          rules={{required: errorMessages.required}}
          control={control}
          render={({onChange, value}) => (
            <SmsInput
              customRef={sms2}
              delete={() => sms1.current.focus()}
              onChange={(text) => {
                onChange(text);
                if (text.length) {
                  sms3.current.focus();
                }
              }}
              value={value}
            />
          )}
        />
        
        <Controller
          name="sms_3"
          defaultValue=""
          rules={{required: errorMessages.required}}
          control={control}
          render={({onChange, value}) => (
            <SmsInput
              customRef={sms3}
              delete={() => sms2.current.focus()}
              onChange={(text) => {
                onChange(text);
                if (text.length) {
                  sms4.current.focus();
                }
              }}
              value={value}
            />
          )}
        />
        
        <Controller
          name="sms_4"
          defaultValue=""
          rules={{required: errorMessages.required}}
          control={control}
          render={({onChange, value}) => (
            <SmsInput
              customRef={sms4}
              delete={() => sms3.current.focus()}
              onChange={(text) => {
                onChange(text);
              }}
              value={value}
            />
          )}
        />
      </Flex>
      
      <Button
        title="Подтвердить"
        full
        size={TextSize.large}
        styles={{marginTop: scaleSize(40)}}
        click={handleSubmit(onSubmit)}
      />
    </>
  );
  
};

export default Verification;
