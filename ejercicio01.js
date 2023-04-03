
isReverseInt = (int1, int2) => {

    if (Math.sign(int1) === 1 && Math.sign(int2) === 1) {
        return true
    }else{
        return false
    }

}


console.log(isReverseInt(123,321))
console.log(isReverseInt(123,342))
console.log(isReverseInt(-123,-321))
