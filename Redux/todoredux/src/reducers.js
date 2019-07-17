const initialState = {
    todos: [],
    filterclicked: false,
    filterarray: [],
    mark: false
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action.payload);
            console.log(action.payload.name);
            // return state;
            return Object.assign({}, state, {
                todos: [{
                    name: action.payload.name,
                    priority: action.payload.priority,
                    time: action.payload.time,
                    status: "Incomplete"
                },
                ...state.todos,]
            });

        case "EDIT_TODO":
            const newlist2 = [...state.todos];
            newlist2[action.payload.index].name = action.payload.values.name;
            newlist2[action.payload.index].priority = action.payload.values.priority;
            newlist2[action.payload.index].time = action.payload.values.time;
            return {
                ...state,
                todos: newlist2
            }
        case "MARK_TODO":
            const newlist1 = [...state.todos];
            newlist1[action.index].status = "COMPLETED";
            return {
                ...state,
                todos: newlist1
            }

        case "DELETE_TODO":
            const newlist = [...state.todos];
            newlist.splice(action.index, 1);
            return {
                ...state,
                todos: newlist
            }

        case "SORT_BY":
            const items = [...state.todos];
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
            (console.log(action.value));
            if (action.value === "priority") {
                items.sort(compare);
            }
            else if (action.value === "status") {
                items.sort(compare1);
            }
            else if (action.value === "time") {
                items.sort(function (a, b) {
                    return new Date(a.time) - new Date(b.time);
                });
            }
            return {
                ...state,
                todos: items
            }

        // case "SORT_PRIORITY":
        //     const items1 = [...state.todos];
        //     function compare(a, b) {
        //         const priorityA = parseInt(a.priority, 10);
        //         const priorityB = parseInt(b.priority, 10);

        //         let comparison = 0;
        //         if (priorityA > priorityB) {
        //             comparison = 1;
        //         } else if (priorityA < priorityB) {
        //             comparison = -1;
        //         }
        //         return comparison;
        //     }
        //     items1.sort(compare);
        //     return {
        //         ...state,
        //         todos: items1
        //     }
        // case "SORT_TIME":
        //     const items = [...state.todos];
        //     items.sort(function (a, b) {
        //         return new Date(a.time) - new Date(b.time);
        //     });
        //     return {
        //         ...state,
        //         todos: items
        //     }
        // case "SORT_STATUS":
        //     const items2 = [...state.todos];
        //     function compare1(a, b) {
        //         const statusA = a.status;
        //         const statusB = b.status;

        //         let comparison = 0;
        //         if (statusA > statusB) {
        //             comparison = 1;
        //         } else if (statusA < statusB) {
        //             comparison = -1;
        //         }
        //         return comparison;
        //     }
        //     items2.sort(compare1);
        //     return {
        //         ...state,
        //         todos: items2
        //     }
        case "SORT_FILTER_BY":
            const items1 = [...state.filterarray];
            function compare2(a, b) {
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
            (console.log(action.value));
            if (action.value === "priority") {
                items1.sort(compare2);
            }
            else if (action.value === "time") {
                items1.sort(function (a, b) {
                    return new Date(a.time) - new Date(b.time);
                });
            }
            return {
                ...state,
                filterarray: items1
            }

        case "SORT_ORDER":
            const items3 = [...state.todos];
            items3.reverse();
            return {
                ...state,
                todos: items3
            }

        case "SORT_FILTER_ORDER":
            const items2 = [...state.filterarray];
            items2.reverse();
            return {
                ...state,
                filterarray: items2
            }

        case "FILTER_COMPLETE":
            const items4 = [...state.todos];
            let array = items4.filter(function (item) {
                return item.status === "COMPLETED";
            });
            return {
                ...state,
                filterclicked: true,
                filterarray: array
            }

        case "FILTER_INCOMPLETE":
            const items5 = [...state.todos];
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