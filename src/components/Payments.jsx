import React, { useContext, useState } from 'react'
import InputField from './shared/InputField'
import FormContext from '../context/FormContext'

const Payments = () => {

  const {formData,setFormData,setPage,page} = useContext(FormContext);
  const[btnDisabled,setBtnDisabled] = useState(true);


  const paymentValidation = () => {

    const isFNameValid = /^[a-zA-Z ]{9,}$/.test(formData.fName);
    const isLNameValid = /^[a-zA-Z ]{9,}$/.test(formData.lName);
    const isCardValid = formData.card.length==16 ;
    const isCvc = formData.cvc.length==3 || isNaN(formData.cvc);


    setBtnDisabled(!(isFNameValid && isLNameValid  && isCardValid && isCvc  ));
  };

  return (
    <>
      <InputField 
      type={"text"} 
      required={true} 
      name={"First Name"}
      value={formData.fName}  
      eventFunction={
        (e)=>{setFormData({...formData,fName:e.target.value})
        paymentValidation()
      }}
      />

      <InputField 
      type={"text"} 
      required={true} 
      name={"Last Name"}
      value={formData.lName}  
      eventFunction={(e)=>{
        setFormData({...formData,lName:e.target.value})
        paymentValidation()
      }}
      />

      <InputField 
      type={"number"} 
      required={true} 
      name={"Card Number"}
      value={formData.card}  
      eventFunction={(e)=>{
        setFormData({...formData,card:e.target.value})
        paymentValidation()
      }}
      />

      <InputField 
      type={"number"} 
      required={true} 
      name={"CVC"}
      value={formData.cvc}  
      eventFunction={(e)=>{setFormData({...formData,cvc:e.target.value})
        paymentValidation()
      }}
      />

      <InputField 
      type={"date"} 
      required={true} 
      name={"Expire date"}
      value={formData.date}  
      eventFunction={(e)=>{setFormData({...formData,date:e.target.value})
        paymentValidation()
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

export default Payments