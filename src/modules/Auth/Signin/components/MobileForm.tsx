import React from 'react';
import {Input} from '@organisms';
import {Button} from '@molecules';
import {TextSize} from '@styles/base';
import {errorMessages, masks, validators} from '@utils';
import {FormProps} from '../interfaces';
import {Controller, useForm} from 'react-hook-form';

const MobileForm = (props: FormProps) => {
  const {control, handleSubmit, errors, getValues} = useForm();
  
  const errorMessage = (controller: string) => {
    return errors[controller] ? errors[controller].message : '';
  };
  
  const onSubmit = () => {
    const {phone} = getValues();
    console.log(phone);
    props.onSubmit(phone);
  };
  
  return (
    <>
      <Controller
        name="phone"
        defaultValue=""
        rules={{
          required: errorMessages.required,
          pattern: {value: validators.phoneValidator, message: errorMessages.phone}
        }}
        control={control}
        render={({onChange, value}) => (
          <Input keyboardType="phone-pad" error={errorMessage('phone')} value={value} mask={masks.phoneMask}
                 placeholder={'+7 Mobile Number'} onChange={(text) => onChange(text)}/>
        )}/>
      
      <Button click={handleSubmit(onSubmit)} title={'Continue'} full size={TextSize.xlarge}/>
    </>
  );
};

export default MobileForm;
