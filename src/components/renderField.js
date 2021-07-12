import React, { Component, PropTypes } from 'react';
const renderField = ({ input, id, readOnly, initialValue, notes, parentDivClass, fieldClass, label, type, placeholder,props, meta: {initial, touched, error, invalid, warning } }) => {
  //console.log('rrrrrr', initial);
return(
<>

<label className="label">{label}</label>
                        <div className="inputDiv"> 
                        
                
                     <input {...input} className="customInput" type={type}/>
                     <br/>
                     {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="error">{warning}</span>))}
                     </div></>

)
}

export default renderField;
