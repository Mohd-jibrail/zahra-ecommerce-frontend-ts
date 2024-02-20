"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContext = void 0;
const react_1 = require("react");
exports.UserContext = (0, react_1.createContext)({
    User: [],
    signIn: () => { }
});
const productReducer = (currProducts, action) => {
    let newProducts = [...currProducts];
    return newProducts;
};
const ProductContextProvider = ({ children }) => {
    const [User, dispatchUser] = (0, react_1.useReducer)(productReducer, []);
    const signIn = (id) => {
        const signInAction = {
            type: "UPDATE_TASK",
        };
        dispatchUser(signInAction);
    };
    return (<exports.UserContext.Provider value={{
            User,
            signIn,
        }}>
        {children}
      </exports.UserContext.Provider>);
};
exports.default = ProductContextProvider;
