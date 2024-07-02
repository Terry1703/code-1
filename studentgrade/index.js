function getstudentgrade(){
    if(marks < 0 || marks > 100 || isNaN(marks)) {
        return'Invalid Score';
    }
if (marks > 79){
    grade = 'A';
}
else if ( marks > 60){
    grade = 'B';
}
else if (marks > 50){
    grade = 'c';
}
else if (marks > 39){
    grade = 'D';
}
else{
    grade = 'E';
}
}
console.log(getstudentgrade (60))