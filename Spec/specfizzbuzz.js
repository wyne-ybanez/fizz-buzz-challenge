/* If the number is divisible by 3 and 5, then return "FizzBuzz"
 If the number is divisible by 3, then return "Fizz"
 If the number is divisible by 5, then return "Buzz"
 Else just return the number

Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function meets 
the above requirements. Make sure that you test all different "types" of inputs that the function may receive. */

describe("fizzbuzz function", function(){

    // Create new instance of the function everytime its called
    beforeEach (function(){
        fizzbuzz = new fizzBuzz()
    })

    // Make sure number inputs are defined
    describe("Return a number, Fizz or Buzz or FizzBuzz", function (){
        
        // Test for number in global scope - must be defined
        it ("should exist in global scope", function (){
            expect(fizzBuzz).toBeDefined()
        })

        // Test for number divisible by 3
        it("should return 'Fizz' when a number is divisible by 3", function(){
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz")
        })

        // Test for number divisible by 5
        it("should return 'Buzz' when a number is divisible by 5", function(){
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz")
        })

        // Test for number to return FizzBuzz, divisible by 3 and 5
        it("should return 'FizzBuzz' when a number is divisible by 3 & 5", function(){
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz")
        }) 

        // Test that it should return the same number if not divisible by 3 and/or 5
        it("should return the argument number used if not divisible by 3 and/or 5", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2)
        })
    })
})

