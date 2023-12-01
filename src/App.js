import React, { useState } from "react";
import Form from "./components/shared/Form";
import PersonalDetails from "./components/PersonalDetails";
import Address from "./components/Address";
import Payments from "./components/Payments";
import Summary from "./components/Summary"
import { FormProvider } from "./context/FormContext";
import PageTitle from "./components/shared/PageTitle";
import PageBody from "./components/shared/PageBody";


function App() {
  const [page,setPage] = useState(0);
  const [btnDisabled,setBtnDisabled] = useState(true);
  const titles = ['Personal Details',"addresses","payment details","Summary"];
  const pages = [
                  <PersonalDetails setBtnDisabled={setBtnDisabled}/>,
                  <Address setBtnDisabled={setBtnDisabled}/>,
                  <Payments setBtnDisabled={setBtnDisabled}/>,
                  <Summary/>
                ];

  // if(page>titles.length-1){
  //   setPage(titles.length-1)
  // }
  // if(page<0){
  //   setPage(0)
  // }

  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   console.log("trest")
  //   setPage(page+1)
  // }


  return (
    <FormProvider>
        <Form>
          <div>
            <PageTitle/>
          </div>

          <div>
          <PageBody/>
          </div>

          {/* <div>
            <button 
              type="button" 
              className="btn prev" 
              onClick={()=>{setPage(page-1)}}>
              Previous
              </button>

            <button 
              type={page===pages.length-2?"submit":"button"}  
              className="btn next" 
              disabled = {btnDisabled}
              onClick={()=>setPage(page !== pages.length - 2 ? page + 1 : page)}>
              {page===pages.length-2?"Submit":"Next"}
            </button>
          </div> */}
        </Form>
    </FormProvider>
  );
}

export default App;