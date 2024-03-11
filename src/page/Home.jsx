import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigateTo = useNavigate();
    const addPage = () => {
        navigateTo("/add");
    }
    const listPage = () => {
        navigateTo("/list");
    }
    return (
        <div className="navigation-menu">
            <button onClick={addPage} className="addButton">
                Volunteer
            </button>
            <button onClick={listPage} className="listButton">
                View List
            </button>
        </div>
    );
}