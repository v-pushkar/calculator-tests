class Calculator {
    
    add(x, y){
        if(!isNaN(x)&& !isNaN(y)){
        return eval(x+"+"+y);
        } else return NaN
      };
      
      subtract(x, y){
        if(!isNaN(x)&& !isNaN(y)){
            return eval(x+"-"+y);
            } else return NaN
      };
      
      multiply(x, y){
        if(!isNaN(x)&& !isNaN(y)){
            return eval(x+"*"+y);
            } else return NaN
      };
      
      divide(x, y){
        if(!isNaN(x)&& !isNaN(y)){
            return eval(x+"/"+y);
            } else return NaN
      };
}

module.exports = Calculator