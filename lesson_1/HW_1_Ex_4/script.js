let age_2 = 18
let age_3 = 60

const checkAge = function (age_1) {

    age_1 = Number(age_1)
    if (!isNaN(age_1)) {

        if (age_1 < age_2) {
            console.log("You don’t have access cause your age is " + age_1 + ". It’s less than ")
        }
        else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome !")
        }
        else if
            (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("Error")
    }
}

let enterAge = prompt("Enter age")
checkAge(enterAge)