import { useContext } from "react"
import FormContext from "../../context/FormContext"


const PageTitle = () => {
    const {titles,page}=useContext(FormContext)
  return (
    <h1>{titles[page]}</h1>
  )
}

export default PageTitle