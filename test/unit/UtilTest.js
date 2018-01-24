describe("Factorial", function(){
    var testCases = [
        {
            n : 0,
            factorial : 1
        },
        {
            n : 1,
            factorial : 1
        },
        {
            n : 2,
            factorial : 2
        },
        {
            n : 3,
            factorial : 6
        },
        {
            n : 4,
            factorial : 24
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.factorial + " when n = " + testCase.n, function(){
            var result = Util.factorial(testCase.n);
            expect(result).toEqual(testCase.factorial);
        })
    });


    it("should raise an exception when n < 0", function(){
        var f = function(){
            Util.factorial(-1);
        }
        expect(f).toThrow('Unable to compute factorial for n < 0');
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.factorial('test');
        }
        expect(f).toThrow('Unable to compute factorial of non integer values');
    })

    it("should raise an exception for n > 100", function(){
        var f = function(){
            Util.factorial(101);
        }
        expect(f).toThrow('Unable to compute factorial for n > 100');
    })
});

describe('Arrangement' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 4,
        r: 4,
        value: 24
    },
    {
        n: 5,
        r: 5,
        value: 120
    },
    {
        n: 4,
        r: 1,
        value: 4
    }];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.arrangement(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });


    it("should raise an exception when r > n", function(){
        var f = function(){
            Util.arrangement( 4 , 5 );
        }
        expect(f).toThrow('Unable to compute arrangement for r > n');
    });


    it("should raise an exception when r is not an integer", function(){
        var f = function(){
            Util.arrangement( 5 , 'toto' );
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values (r)');
    })

    
});



describe('Combination' , function(){

    var testCases = [
    {
        n: 0,
        r: 0,
        value: 1
    },
    {
        n: 4,
        r: 4,
        value: 1
    },
    {
        n: 5,
        r: 5,
        value: 1
    },
    {
        n: 4,
        r: 1,
        value: 4
    }];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.value + " when n = " + testCase.n + " and r = " + testCase.r, function(){
            var result = Util.combination(testCase.n, testCase.r);
            expect(result).toEqual(testCase.value);
        })
    });

});


describe('isPrime' , function(){

    var testCases = [
    {
        n: 1,
        value: false
    },
    {
        n: 2,
        value: true
    },
    {
        n: 3,
        value: true
    },
    {
        n: 4,
        value: false
    },
    {
        n: 5,
        value: true
    },
    {
        n: 6,
        value: false
    }];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.value + " when n = " + testCase.n, function(){
            var result = Util.isPrime(testCase.n);
            expect(result).toEqual(testCase.value);
        })
    });



    it("should raise an exception when n is not a number", function(){
        var f = function(){
            Util.isPrime( 'popo' );
        }
        expect(f).toThrow('Unable to compute arrangement of non integer values');
    });


    it("should raise an exception when r <= 0", function(){
        var f = function(){
            Util.isPrime( -5 );
        }
        expect(f).toThrow('Unable to compute factorial for n <= 0');
    })
    

});

describe("SumPrime", function(){
    var testCases = [
        {
            n : 2,
            sumprime : 2
        },
        {
            n : 3,
            sumprime : 5
        },
        {
            n : 4,
            sumprime : 5
        },
        {
            n : 5,
            sumprime : 10
        },
        {
            n : 6,
            sumprime : 10
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.sumprime + " when n = " + testCase.n, function(){
            var result = Util.sumPrime(testCase.n);
            expect(result).toEqual(testCase.sumprime);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.sumPrime("test");
        }
        expect(f).toThrow('Unable to compute sumPrime of non integer values');
    })
});

describe("FizzBuzz", function(){
    var testCases = [
        {
            n : 2,
            res : [1, 2]
        },
        {
            n : 3,
            res : [1, 2, "Fizz"]
        },
        {
            n : 4,
            res : [1, 2, "Fizz", 4]
        },
        {
            n : 5,
            res : [1, 2, "Fizz", 4, "Buzz"]
        },
        {
            n : 15,
            res : [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
        }
    ];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.res + " when n = " + testCase.n, function(){
            var result = Util.fizzBuzz(testCase.n);
            expect(result).toEqual(testCase.res);
        })
    });

    it("should raise an exception when n is not an integer", function(){
        var f = function(){
            Util.fizzBuzz("test");
        }
        expect(f).toThrow('Unable to compute fizzbuzz of non integer values');
    });

    it("should raise an exception when n <= 1",function(){
        var f = function(){
            Util.fizzBuzz(0);
        }

        expect(f).toThrow('Unable to compute factorial for n <= 1');

    });

});

describe("Cipher", function(){

    var testCases = [
    {
        original: 'abcd',
        ciphered: 'bcde'
    },
    {
        original: 'pipi',
        ciphered: 'qjqj'
    },
    {
        original: "Andy Zonk",
        ciphered: "Boez Apol"
    },
    {
        original: "Test Unitaire",
        ciphered: "Uftu Vojubjsf"
    }];

    testCases.forEach(function(testCase){
        it("should returns " + testCase.original + " when n = " + testCase.ciphered, function(){
            var cipher = Util.cipher(testCase.original);
            expect(cipher).toEqual(testCase.ciphered);
        });

    });

    it("should returns exception when n is not a string",function(){
        var f = function(){
            Util.cipher(3);
        }
        expect(f).toThrow('"phrase" is not a string');
    });

});