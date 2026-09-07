const debounce = () => {
    let timeout;
    let searchKeyword = ""
    return function (value, cb, wait = 500) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            searchKeyword = value;
            cb(searchKeyword)
        }, wait)
    }
}

