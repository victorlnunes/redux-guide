import userActionTypes from "./action-types";

export const loginUser = (payload) => ({
    type: userActionTypes.LOGIN,
    payload: payload
});

export const logoutUser = () => ({
    type: userActionTypes.LOGOUT
})

