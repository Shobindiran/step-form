import React from 'react'

const InputField = ({type,required,name,value,eventFunction}) => {
  return (
    <div>
        <div class="input-field">
            <input type={type} required={required} value={value} onChange={eventFunction}/>
            <span>{name}</span>
        </div>
    </div>
  )
}

export default InputField