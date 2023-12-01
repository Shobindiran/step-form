import { useContext } from "react"
import FormContext from "../../context/FormContext"

const PageBody = () => {
    const {pages,page} = useContext(FormContext)
  return (
    <div>{pages[page]}</div>
  )
}

export default PageBody