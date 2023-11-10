function solve(passphrase){
    output = []
    function checkLength(passphrase){
        if (passphrase.length < 6 || passphrase > 10){
            output.push("Password must be between 6 and 10 characters")
        }
    }
    function checkContainsOnlyLettersAndDigits(passphrase){
        if (!passphrase.match(/^[A-Za-z0-9]+$/)){
            output.push("Password must consist only of letters and digits")
        }
    }

    function checkDigitsCount(passphrase){
        let digitsCount = 0
        for (character of passphrase){
            if (character.match(/[0-9]/)){
                digitsCount++
            }
        }
        if (digitsCount < 2){
            output.push("Password must have at least 2 digits")
        }

    }
    checkLength(passphrase)
    checkContainsOnlyLettersAndDigits(passphrase)
    checkDigitsCount(passphrase)
    if (output.length > 0){
        console.log(output.join('\n'))
    }else{
        console.log("Password is valid")   
    }
}
solve('logIn')
solve('MyPass123')
solve('Pa$s$s')