const initialState = {
    articles: [],
    filterclicked: false,
    filterarray: []
};
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ARTICLE":
            return Object.assign({}, state, { articles: [...state.articles, action.payload] })
        case "MARK_ARTICLE":
            const newlist1 = [...state.articles];
            newlist1[action.index].status = "COMPLETED";
            return {
                ...state,
                articles: newlist1
            }
        case "DELETE_ARTICLE":
            const newlist = [...state.articles];
            newlist.splice(action.index, 1);
            return {
                ...state,
                articles: newlist
            }
        case "SORT_PRIORITY":
            const items1 = [...state.articles];
            function compare(a, b) {
                const priorityA = parseInt(a.priority, 10);
                const priorityB = parseInt(b.priority, 10);

                let comparison = 0;
                if (priorityA > priorityB) {
                    comparison = 1;
                } else if (priorityA < priorityB) {
                    comparison = -1;
                }
                return comparison;
            }
            items1.sort(compare);
            return {
                ...state,
                articles: items1
            }
        case "SORT_TIME":
            const items = [...state.articles];
            items.sort(function (a, b) {
                return new Date(a.time) - new Date(b.time);
            });
            return {
                ...state,
                articles: items
            }
        case "SORT_STATUS":
            const items2 = [...state.articles];
            function compare1(a, b) {
                const statusA = a.status;
                const statusB = b.status;

                let comparison = 0;
                if (statusA > statusB) {
                    comparison = 1;
                } else if (statusA < statusB) {
                    comparison = -1;
                }
                return comparison;
            }
            items2.sort(compare1);
            return {
                ...state,
                articles: items2
            }
        case "SORT_ORDER":
            const items3 = [...state.articles];
            items3.reverse();
            return {
                ...state,
                articles: items3
            }
        case "FILTER_COMPLETE":
            const items4 = [...state.articles];
            let array = items4.filter(function (item) {
                return item.status === "COMPLETED";
            });
            return {
                ...state,
                filterclicked: true,
                filterarray: array
            }
        case "FILTER_INCOMPLETE":
            const items5 = [...state.articles];
            let array1 = items5.filter(function (item) {
                return item.status === "Incomplete";
            });
            return {
                ...state,
                filterclicked: true,
                filterarray: array1
            }
        case "SHOW_ALL":
            return {
                ...state,
                filterclicked: false
            }
        default:
            return state;
    }
}

export default rootReducer;