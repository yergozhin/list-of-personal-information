export default function Add() {
    return (
        <div className="form">
            <div className="form-content">
                <ul>
                    {pages?.map((todo) => (
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