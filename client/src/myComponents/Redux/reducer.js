//


let initial_state = {
    wishlist: [],
    totalTimeSpend: 0,
    futureShows: [],
    current: [],
    searchShow: []
};

export const reducer = (state = initial_state, action) => {



    switch (action.type) {

        case "setwishlist":
            {
                // console.log('setWishList is called inside action.js in react redux');
                // console.log(action.payload)

                //eliminate duplicate values

                let list = [...state.wishlist];
                let check = list.filter(x => x.id === action.payload.id)

                return ({
                    ...state,
                    wishlist: state.wishlist.length === 0 ? [action.payload] :

                        check.length === 0 ? [...state.wishlist, action.payload] : [...state.wishlist]

                })


            }
        case "setfutureshows":
            {
                return ({
                    ...state,
                    futureShows: action.payload
                })
            }
        case 'setsearchshows':
            {
                return ({
                    ...state,
                    searchShow: action.payload
                })
            }
        case 'setcurrent':
            {
                return ({
                    ...state,
                    current: action.payload
                })
            }
        default:
            {
                return state;

            }
    }

}