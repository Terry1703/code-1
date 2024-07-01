if (0 <= marks <= 100){
}
else{
    return 'enter number between 0 and 100';
}
if (marks > 79){
    grade = 'A';
}
else if (60 <= marks <= 79){
    grade = 'B';
}
else if (50 <= marks <= 59){
    grade = 'c';
}
else if (40 <= marks <= 49){
    grade = 'D';
}
else{
    grade = 'E';
}
console.log(get_studentgrade)