import React from "react";
import InputMask from 'react-input-mask';

//{propA, propB} : {propA:any, propB:any}

const MaskedInput = ({ value , onChange, className } : {value:any, onChange:any, className:string}) => {
  return <InputMask mask="999.999.999-99" 
  onChange={onChange}
  autoComplete='off'
  style={{ outline: 0 }}
  inputMode="numeric"
  placeholder="CPF"
  className={className}
  />
}

export default MaskedInput