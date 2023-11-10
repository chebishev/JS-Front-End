function solve(array){

    function checkPalindrome(number){
        number = number.toString();
        return number === number.split('').reverse().join('');
    }
    for (number of array){
        console.log(checkPalindrome(number));
    }
}
solve([123, 323, 421, 121])
solve([32, 2, 232, 1010])