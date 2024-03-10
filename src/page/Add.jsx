import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { addPage } from "../Actions/action";
import { useState } from "react";

export default function Add() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const pages = useSelector((state) => state.pages);
    const dispatch = useDispatch();

    const navigateTo = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const onSave = () => {
        if (!name || !surname || !phone) return;
        dispatch(addPage(name,surname,phone));
        //navigateTo("/");
    }

    return (
        <div className="form">
            <div className="form-content">
                <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
                <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
                <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
                <button onClick={onSave}>
                    Save
                </button>
            </div>
        </div>
    );
}
