exports.setWishList = (data) => {
    console.log('setwishlist')
        // console.log(data)


    return ({

        type: "setwishlist",
        payload: data.show
    })

}

exports.setCurrent = (show) => {
    console.log('setcurrent')
    return ({
        type: 'setcurrent',
        payload: show
    })
}

exports.setFutureShows = (shows) => {

    // console.log('in action.js');
    let i = new Date().getSeconds();

    let insertedshows = shows.splice(i, i + 10);
    // console.log(insertedshows);

    return ({
        type: "setfutureshows",
        payload: insertedshows
    })

}

exports.setSearchShows = (arr) => {

    console.log('search shows');
    // console.log(arr);

    return ({
        type: 'setsearchshows',
        payload: arr
    })

}