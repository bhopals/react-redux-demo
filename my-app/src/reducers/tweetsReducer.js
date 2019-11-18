export default function reducer(state={
tweets:[],
fetching:false,
fatched:false,
error:null
}, action) {

    switch(action.type) {
        case 'FETCH_TWEETS_FULLFILLED' : {
            return {...state, fetched:true, tweets:action.payload}
        }
        case 'FETCH_TWEETS_REJECTED' : {
            return {...state, fetching:false, error:action.payload}
        }
        case 'FETCH_TWEETS' : {
            return {...state, fetching:true, fetched:false}
        }

        case 'ADD_TWEET' : {
            return {
                ...state,
                tweet:[...state.tweets, action.payload]
            }
        }
    }

}
