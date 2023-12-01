import { useContext } from "react"
import FormContext from "../../context/FormContext"

const Form = ({children}) => {

  const {handleSubmit}=useContext(FormContext)

  return (
    <form onSubmit={handleSubmit}>{children}</form>
  )
}

export default Form