import {fetchProductsSuccess} from './actions';

function fetchUsers() {
    return dispatch => {
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            dispatch(fetchProductsSuccess(res.users));
            return res.users;
        })
    }
}

export default fetchUsers;