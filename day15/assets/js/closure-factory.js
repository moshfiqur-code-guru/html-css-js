function counter() {
    let count = 0;

    function increment(inc) {
        count += inc;
        //countElement.innerText = count.toString()
    }

    function decrement(dec) {
        count -= dec;
        //countElement.innerText = count.toString()
    }

    function getCount() {

        return count;
    }

    return {
        increment,
        decrement,
        getCount
    }
}
