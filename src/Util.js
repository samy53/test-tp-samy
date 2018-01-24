Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {

    if (n < 0) {
        throw 'Unable to compute factorial for n < 0'
    }

    if (!(typeof n === "number") || Math.floor(n) !== n) {
        throw 'Unable to compute factorial of non integer values'
    }

    if (n >= 100) {
        throw 'Unable to compute factorial for n > 100'
    }

    if (0 === n) {
        return 1;
    }

    return n * Util.factorial(n - 1);
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {

    if( r > n )
    {
        throw 'Unable to compute arrangement for r > n';
    }

    if( typeof r !== "number" )
    {
        throw 'Unable to compute arrangement of non integer values (r)'
    }

    return Util.factorial( n ) / Util.factorial( n - r );

};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {


    return Util.arrangement( n ,r ) / Util.factorial( r ) ;

};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {

    if( typeof n !== "number" )
    {
        throw 'Unable to compute arrangement of non integer values'
    }

    if( n <= 0 )
    {
        throw 'Unable to compute factorial for n <= 0'
    }

    if( n === 1 )
        return false;

    for( var i = 2 ; i < n ; i++ )
        if( n % i === 0 ) return false

    return n !== 1

};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

    var res = 0;

    if( typeof n !== "number" || Math.floor( n ) !== n )
    {
        throw 'Unable to compute sumPrime of non integer values';
    }

    for( var i = n ; i >= 2 ; i-- )
    {
        if( Util.isPrime( i ) === true )
        {
            res = res + i;
        }
    }

    return res;

};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

    var i;
    var res = [];


    if( typeof n !== "number" || Math.floor( n ) !== n )
    {
        throw 'Unable to compute fizzbuzz of non integer values';
    }

    if( n <= 1 )
    {
        throw 'Unable to compute factorial for n <= 1'
    }


    for( i = 1 ; i <= n ; i++ )
    {
        if( i%3 === 0 && i%5 === 0 )
            res.push( "FizzBuzz" );
        else if( i%3 === 0 )
            res.push( "Fizz" );
        else if( i%5 === 0 )
            res.push( "Buzz" );
        else
            res.push( i );
    }

    return res;

};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

    var i;
    var cipher = "";

    if( typeof phrase !== "string" )
        throw '"phrase" is not a string'

    for( i = 0 ; i < phrase.length ; i++ )
    {
        if( phrase[i] === "Z" )
            cipher += "A"
        else if( phrase[i] === "z" )
            cipher += "a";
        else if( phrase[i] === " " )
            cipher += " "
        else
            cipher += String.fromCharCode(phrase[i].charCodeAt(0)+1);
    }

    return cipher;

};
