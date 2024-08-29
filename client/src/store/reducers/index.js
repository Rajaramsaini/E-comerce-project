import{combineReducers} from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productReducer";





const rootReducer = combineReducers({
    cart: productsReducer,
    user:userReducer,
});

export default rootReducer;