

const calculator = require("./calculator")

describe("Calculator :", ()=>{

    const testData = [
        [1,2,3],[3,4,7],[-5,6,1], [0.7,0.2,0.8999999999999999],["5",10,15],['gdsfd',12,NaN]
    ]   
    test.each(testData)("operator each +:", (a, b, expected) => {
        expect(calculator(a,"+",b)).toBe(expected);
      });
    test("operator +:",()=>{
        expect(calculator(2,"+",2)).toBe(4)
        expect(calculator(2,"+",-2)).toBe(0)
        expect(calculator(-2,"+",-2)).toBe(-4)
        expect(calculator(20,"+",0)).toBe(20)
        expect(calculator(0.1,"+",0.2)).toBeCloseTo(0.3, 15);
        expect(calculator(2,"+",2)).not.toBe(5)
    })
    test("operator -:",()=>{
        const operator = "-"
        expect(calculator(2,operator,2)).toBe(0)
        expect(calculator(2,operator,3)).toBe(-1)
        expect(calculator(2,operator,3)).not.toBe(0)
    })
    test("operator *:",()=>{
        const operator = "*"
        expect(calculator(2,operator,2)).toBe(4)
        expect(calculator(2,operator,3)).toBe(6)
        expect(calculator(2,operator,-3)).toBe(-6)
        expect(calculator(-2,operator,-3)).toBe(6)
        expect(calculator(2,operator,3)).not.toBe(3)
        expect(calculator(2,operator,0)).toBe(0)
    })
    test("operator /:",()=>{
        const operator = "/"
        expect(calculator(3,operator,3)).toBe(1)
        expect(calculator(6,operator,3)).toBe(2)
        expect(calculator(6,operator,-3)).toBe(-2)
        expect(calculator(1,operator,1)).toBe(1)
        expect(calculator(1,operator,0)).toBe(Infinity)
        expect(calculator(2,operator,3)).not.toBe(3)
        expect(calculator(0,operator,-3)).toBe(-0)
        expect(typeof calculator(0.1,operator,2)).not.toBe('string')
        expect(typeof calculator(0.1,operator,2)).toBe('number')
    })
})