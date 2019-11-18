export function fetchTweets() {
    return {
        type:'FETCH_TWEETS',
        payload: []
    }
}

export function addTweets(tweet) {
    return {
        type:'ADD_TWEET',
        payload:[...tweet]
    }
}