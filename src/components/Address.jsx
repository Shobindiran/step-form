import React, { useContext, useState } from 'react'
import InputField from './shared/InputField'
import FormContext from '../context/FormContext'

const Address = () => {
  const {formData,setFormData,page,setPage} = useContext(FormContext);
  const [btnDisabled,setBtnDisabled] = useState(true);

  const addressValidation = () => {

    const isDoorNoValid = formData.doorNo.trim() !== '' && formData.doorNo.length <= 7;
    const isStreetValid = formData.street.trim() !== '' && formData.doorNo.length <= 20;
    const isCityValid = formData.city.trim() !== '' && formData.doorNo.length <= 20;

    setBtnDisabled(!(isDoorNoValid && isStreetValid && isCityValid));

  };
  
  return (
    <>
      <InputField 
      type={"text"} 
      required={true} 
      name={"Door No:"}
      value={formData.doorNo}  
      eventFunction={(e)=>{
        setFormData({...formData,doorNo:e.target.value})
        addressValidation();
      }}
      />

      <InputField 
      type={"text"} 
      required={true} 
      name={"Street:"}
      value={formData.street}  
      eventFunction={(e)=>{
        setFormData({...formData,street:e.target.value})
        addressValidation();
      }}
      />

      <InputField 
      type={"text"} 
      required={true} 
      name={"City"}
      value={formData.city}  
      eventFunction={(e)=>{
        setFormData({...formData,city:e.target.value})
        addressValidation();
      }}

      />

      <div>
        <button 
          type="button" 
          className="btn prev" 
          onClick={()=>{setPage(page-1)}}>
          Previous
          </button>

        <button 
          type={"button"}
          className="btn next" 
          disabled = {btnDisabled}
          onClick={()=>setPage( page + 1)}>
          {"Next"}
        </button>
      </div>

    </>
  )
}

export default Address