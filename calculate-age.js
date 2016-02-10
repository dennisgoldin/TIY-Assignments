// calculate age code challenge
function calculateAge(birthYear, currentYear) {
    var age1 = currentYear-birthYear;
    var age2 = Math.abs(birthYear - currentYear);
    return ("You are either " + age1 + " or " + age2 + ".");
}
console.log(calculateAge(1999, 2019));
console.log(calculateAge(2000, 2030));
console.log(calculateAge(2001, 2050));
