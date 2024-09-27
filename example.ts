function getGrade(percentage: number){
    if (percentage > 90) {
        console.log("Grade: A");
    } else if (percentage >= 80 && percentage <= 89) {
        console.log("Grade: B");
    } else if (percentage >= 70 && percentage <= 79) {
        console.log("Grade: C");
    } else if (percentage >= 60 && percentage <= 69) {
        console.log("Grade: D");
    } else if (percentage >= 50 && percentage <= 59) {
        console.log("Grade: E");
    } else if (percentage < 50) {
        console.log("Failed");
    } else {
        console.log("Invalid input");
    }
}

getGrade(78)
// Grade: C