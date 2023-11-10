function solve(grade){
    output = ""
    if (grade < 3){
        output = "Fail"
    }else if (grade < 3.5){
        output = "Poor"
    }else if (grade < 4.5){
        output = "Good"
    }else if (grade < 5.5){
        output = "Very good"
    }else{
        output = "Excellent"
    }

    function fixGrade(grade){
        if (grade < 3){
            output += ` (${Math.floor(grade)})`
        }else {
            output += ` (${grade.toFixed(2)})`
        }
        return output
    }
   
    console.log(fixGrade(grade));

}
solve(3.33)
solve(4.50)
solve(2.99)