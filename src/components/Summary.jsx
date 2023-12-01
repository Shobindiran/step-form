import { useContext } from "react"
import FormContext from "../context/FormContext"

const Summary = () => {
  const {formData} = useContext(FormContext)
  return (
    <>
      <h2>First Name:</h2><h3>{formData.fName}</h3>
      <h2>Last Name:</h2><h3>{formData.lName}</h3>
      <h2>Age:</h2><h3>{formData.age}</h3>
      <h2>ADDRESS</h2>
      <h3>{formData.doorNo},</h3>
      <h3>{formData.street},</h3>
      <h3>{formData.city}.</h3>
      <h2>CARD DETAILS</h2>
      <h3>{formData.card},</h3>
      <h3>{formData.cvc},</h3>
      <h3>{formData.exp}.</h3>
    </>
  )
}

export default Summary