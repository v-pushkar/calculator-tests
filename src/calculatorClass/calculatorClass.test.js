const Calculator = require("./calculatorClass")
 const calculator = new Calculator;

 const add = calculator.add;
 const subtract = calculator.subtract;
 const multiply = calculator.multiply;
 const divide  = calculator.divide;

 describe("Testin calculator class:",()=>{
    describe("valid snstances:", () => {
        test("to be instance of class:", () => {
            expect(new Calculator()).toBeInstanceOf(Calculator);
        });
        test("to be instance of class:", () => {
            expect(add).toBeInstanceOf(Function);
        });
      
      });
    describe("valid additions", () => {
        test("1 + 1 = 2", () => {
          expect(add(1, 1)).toEqual(2);
        });      
        test("10 + 20 = 30", () => {
          expect(add(10, 20)).toEqual(30);
        });
        test("test if string: '10' + 20 = 30", () => {
          expect(add('10', 20)).toEqual(30);
        });
        test("test if string not correct: 'ds10sdsd' + 20 = 30", () => {
          expect(add('ds10sdsd', 20)).toEqual(NaN);
        });
      });
      
      describe("valid subtractions", () => {
        test("10 - 2 = 8", () => {
          expect(subtract(10, 2)).toEqual(8);
        });
      
        test("87 - 523 = -436", () => {
          expect(subtract(87, 523)).toEqual(-436);
        });
        test("test if string not correct: sdsd87dd - 523 = -436", () => {
          expect(subtract("sdsd87dd ", 523)).toEqual(NaN);
        });
      });
      describe("valid multiply", () => {
        test("10 * 2 = 20", () => {
          expect(multiply(10, 2)).toEqual(20);
        });
      
        test("87 * 523 = 45501", () => {
          expect(multiply(87, 523)).toEqual(45501);
        });
        test("test if string not correct: hfjjdhf87 * 523 = 45501", () => {
          expect(multiply("hfjjdhf87", 523)).toEqual(NaN);
        });
      });
      describe("valid divide", () => {
        test("10 / 2 = 5", () => {
          expect(divide(10, 2)).toEqual(5);
        });
      
        test("45501 / 523 = 87", () => {
          expect(divide(45501, 523)).toEqual(87);
        });
        test("test if string not correct: hfjjdhf87 / 523 = 87", () => {
            expect(divide("hfjjdhf87", 523)).toEqual(NaN);
          });
      });
 })