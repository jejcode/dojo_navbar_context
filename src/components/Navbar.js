import React, {useContext} from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
    const context = useContext(UserContext)
    const {userName} = context
    return (
        <div className="row text-bg-info p-3 align-items-start">
            <div className="col d-flex justify-content-end ">
                <p className="my-1 mx-4">Hi, {userName}</p>
            </div>
        </div>
    )
}

export default Navbar