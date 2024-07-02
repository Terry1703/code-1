let speed_limit =70
let demerit_points =5

if (speed <= speed_limit){
    return 'ok';
}
else if (demerit_points = (speed-speed_limit)){
    return 'total demerit_points : {demerit_points}';
}
