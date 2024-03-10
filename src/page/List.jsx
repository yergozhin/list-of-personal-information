import { useSelector } from "react-redux";

function List() {
    const pages = useSelector((state) => state.pages);
    return (
        <div className="form">
            <div className="form-content">
                <ul>
                    {pages?.map((page) => (
                        <li key={page.phone}>
                            <p>{page.name}</p>
                            <p>{page.surname}</p>
                            <p>{page.phone}</p>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}
export default List;