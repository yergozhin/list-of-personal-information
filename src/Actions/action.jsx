export const ADD_PAGE = "ADD_PAGE";

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