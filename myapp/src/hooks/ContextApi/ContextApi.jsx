import {createContext} from 'react'

export const CostumerContext = createContext()
// console.log(CostumerContext)
const ContextApi = ({children}) => {
// console.log(children)
    const costumer = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    }

  return (

   <CostumerContext.Provider value = {costumer}>
    {children}
    </CostumerContext.Provider>

  )
}

export default ContextApi