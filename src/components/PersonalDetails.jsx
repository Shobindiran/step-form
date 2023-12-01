
import React, { useContext, useState } from 'react';
import InputField from './shared/InputField';
import FormContext from '../context/FormContext';

const PersonalDetails = () => {
  const { formData, setFormData,page,pages,setPage } = useContext(FormContext);
  const [btnDisabled,setBtnDisabled] = useState(true);


  const personalDetailsValidation = () => {

    const isNameValid = /^[a-zA-Z ]{9,}$/.test(formData.name);
    const isAgeValid = Number(formData.age)>10 && Number(formData.age)<100;
    const isPhoneValid = formData.phone.toString().length==10;


    setBtnDisabled(!(isNameValid && isAgeValid && isPhoneValid));
  };

  return (
    <>
      <InputField
        type={"text"}
        required={true}
        name={"Name"} 
        value={formData.name}  
        eventFunction={
          (e)=>{
            setFormData({...formData,name:e.target.value});
            personalDetailsValidation();
          }
        }
      />

      <InputField 
        type={"number"} 
        required={true} 
        name={"Age"} 
        value={formData.age} 
        eventFunction={(e)=>
          {setFormData({...formData,age:e.target.value})
          personalDetailsValidation();
        }}
      />

      <InputField 
        type={"number"} 
        required={true} 
        name={"Phone Number"} 
        value={formData.phone} 
        eventFunction={(e)=>{
          setFormData({...formData,phone:e.target.value})
          personalDetailsValidation();
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
  );
};

export default PersonalDetails;
