const calculator =(num1, operator, num2)=>{
    if(!isNaN( num1)&& !isNaN(num2)){
        return eval(num1+operator+num2)
    }
    else {
        return NaN
    }
}

module.exports = calculator