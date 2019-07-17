
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';


export function getuser() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => { dispatch({ type: FETCH_USER_SUCCESS, payload: result }) })
    }
}
