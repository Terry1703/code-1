// let speed = 140;
// let demerit_points = 5;
function speed1() {
  
    let speed =  window.prompt("speed")
  if (speed <= 70 ) {
    console.log("ok")
  } else if(speed > 70 ){ 
    const points =  Math.floor((speed - 70) / 5);
    console.log(points )
    if (points > 12) {
        console.log("license Suspended");
    }
  }else {
  
  }
}
 console.log(speed1( ))