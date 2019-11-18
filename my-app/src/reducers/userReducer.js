export default function useReducer(state = {
    user: {
        id: null,
        age:null,
        name:null
    },
    fetching:false,
    fetched:false,
    error:null
}, action) {

    switch(action.type) {

        case 'FETCH_USER' : {
            return {...state, fetching:true}
        }

        case 'FETCH_USER_REJECTED' : {
            return {...state, fetching:false, fetched:false, error:action.payload}
        }

        case 'FETCH_USER_FULLFILLED' : {
            return {...state, fetching:false, fetched:true, user:action.payload}
        }

        case 'SET_USER_NAME' : {
            return {
                ...state,
                user : {...state.user, name:action.payload}
            }
        }

        case 'SET_USER_AGE' : {
            return {
                ...state,
                user : {...state.user, name:action.payload}
            }
        }




    }
}