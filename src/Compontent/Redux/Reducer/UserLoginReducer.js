export const UserLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST': return {
            ...state, loading: true,
        }
        case 'USER_LOGIN_SUCCESS': return {
            ...state, loading: false,
            success: true
        }
        case 'USER_LOGIN_FAIL': return {
            ...state, loading: false,
            error: 'Invaild credential'
        }

        case 'USER_LOGOUT': return {
            ...state
        }

        default: return state
    }
}