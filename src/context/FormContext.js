import { Children, createContext, useState } from "react"
import PersonalDetails from "../components/PersonalDetails";
import Address from "../components/Address";
import Payments from "../components/Payments";
import Summary from "../components/Summary";

const FormContext = createContext();

export const FormProvider = ({children}) => {

    const [formData,setFormData] = useState({
        name:"",
        age:"",
        phone:"",
        doorNo:"",
        street:"",
        city:"",
        fName:"",
        lName:"",
        card:"",
        cvc:"",
        exp:""
    })

  const [page,setPage] = useState(0);
  const [btnDisabled,setBtnDisabled] = useState(true);
  const titles = ['Personal Details',"addresses","payment details","Summary"];
  const pages = [<PersonalDetails/>,<Address/>,<Payments/>,<Summary/>];

  if(page>titles.length-1){
    setPage(titles.length-1)
  }
  if(page<0){
    setPage(0)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("trest")
    setPage(page+1)
  }


  return (
    <FormContext.Provider value={{formData,setFormData,page,setPage,btnDisabled,setBtnDisabled,titles,pages,handleSubmit}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormContext
