
function studentGrade() {
  const marks = parseInt(prompt("ENTER MARKS"))
    // Student inputs  there marks
    if (marks < 0 || marks >= 101  ) {
        return 'Invalid Score';
    }

let grade
    if (marks > 79) {
        grade = 'A';
    }
    else if (marks > 60) {
        grade = 'B';
    }
    else if (marks > 50) {
        grade = 'c';
    }
    else if (marks > 39) {
        grade = 'D';
    }
    else {
        grade = 'E';
    } 
    
    console.log(grade)
}
console.log(studentGrade())