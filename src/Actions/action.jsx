export const ADD_PAGE = "ADD_PAGE";
export const DELETE_PAGE = "DELETE_PAGE";

export const addPage = (name, surname, phone) => {
    let task = {
        name: name,
        surname: surname,
        phone: phone
    }
    return{
        type: ADD_PAGE,
        payload: task
    };
};
export const deletePage = (phone) => {
    return{
        type: DELETE_PAGE,
        payload: phone
    };
};