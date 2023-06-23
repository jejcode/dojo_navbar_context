import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Form = () => {
    const context = useContext(UserContext)
    const {userName, setUserName} = context
    return (
        <form>
            <label className="form-label" htmlFor="name">Name:</label>
            <input className="form-control" type="text" name="name" id="name" onChange={(e) => {setUserName(e.target.value)}} value={ userName }/>
        </form>
    )
}

export default Form