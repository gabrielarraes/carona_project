import React from "react";

const BasicInput  = (
  { 
    type, 
    className, 
    placeHolder,
    onChange,
    valid,
    maxLenght,
  } : 
  {
    type:string,
    className:boolean,
    placeHolder:string,
    onChange:any,
    valid:boolean
    maxLenght?:number,
  }) => {

  return <input 
        type={type}
        className={valid ?
          "block border border-purple-700 focus:border-purple-500 focus:ring-purple-700 bg-gray-50 focus:bg-white w-full p-3 rounded-lg mb-2.5" : 
          "block border-gray-500 w-full focus:border-rose-500 focus:ring-white bg-gray-50 focus:bg-white p-3 rounded-lg mb-2.5"} 
        placeholder={placeHolder}
        onChange={onChange} 
        autoComplete="off"
        maxLength={maxLenght}
        />
}

export default BasicInput;