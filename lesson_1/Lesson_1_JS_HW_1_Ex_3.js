// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

let age_2 = 18
let age_3 = 60

const checkAge = function (age) {

    if (!isNaN(age)) {

        if (age < age_2) {
            console.log("You don’t have access cause your age is " + age + ". It’s less than ")
        }
        else if (age >= age_2 && age < age_3) {
            console.log("Welcome !")
        }
        else if
            (age > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("Error")
    }
}

checkAge('12')
