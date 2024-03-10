import { useSelector } from "react-redux";
import { deletePage } from "../Actions/action";
import { useDispatch } from "react-redux";

function List() {
    const pages = useSelector((state) => state.pages);
    const dispatch = useDispatch();
    return (
        <div className="form">
            <div className="form-content">
                <ul>
                    {pages?.map((page) => (
                        <li key={page.phone}>
                            <p>{page.name}</p>
                            <p>{page.surname}</p>
                            <p>{page.phone}</p>
                            <button onClick= {() => dispatch(deletePage(page.phone))}>Delete</button>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}
export default List;