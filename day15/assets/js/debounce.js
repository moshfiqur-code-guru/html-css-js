const debounce = (cb) => {
    let timeout;
    let searchKeyword = ""
    return function (value) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            searchKeyword = value;
            cb(searchKeyword)
        }, 1000)
    }
}

