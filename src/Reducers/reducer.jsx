import { ADD_PAGE, DELETE_PAGE } from "../Actions/action";

const initialState = {
    pages: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PAGE:
            return {
                pages: [
                    ...state.pages,
                    {
                        name: action.payload.name,
                        surname: action.payload.surname,
                        phone: action.payload.phone
                    }
                ]
            }
        case DELETE_PAGE:
            return{
                pages: [...state.pages.filter(page => page.phone !== action.payload)]
            }
        default:
            return state;
    }
}
export default reducer;