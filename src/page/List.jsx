import { useSelector } from "react-redux";
import { deletePage } from "../Actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addPage } from "../Actions/action";

function List() {
    const pages = useSelector((state) => state.pages);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const onUpdate = (event) => {
        if (!name && !surname && !phone) return;
        dispatch(deletePage(event.phone));
        if(name && surname && phone){
            dispatch(addPage(name,surname,phone));
        }else if(name && surname){
            dispatch(addPage(name,surname,event.phone));
        }else if(name && phone){
            dispatch(addPage(name,event.surname,phone));
        }else if(surname && phone){
            dispatch(addPage(event.name,surname,phone));
        }else if(name){
            dispatch(addPage(name,event.surname,event.phone));
        }else if(surname){
            dispatch(addPage(event.name,surname,event.phone));
        }else if(phone){
            dispatch(addPage(event.name,event.surname,phone));
        }
        navigateTo("/");
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="First Name"/>
            <input value={surname} onChange={handleSurnameChange} type="text" name="surname" placeholder="Last Name"/>
            <input value={phone} onChange={handlePhoneChange} type="text" name="phonenumber" placeholder="Phone Number"/>
            <div className="people">
                <ul>
                    {pages?.map((page) => (
                        <p key={page.phone} className="person">
                            <p>{page.name}</p>
                            <p>{page.surname}</p>
                            <p>{page.phone}</p>
                            <div>
                            <button onClick= {() => dispatch(deletePage(page.phone))}>Delete</button>
                            <button onClick={() => onUpdate(page)}>
                                Update
                            </button>
                            </div>
                        </p>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}
export default List;