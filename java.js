
let power = 13;
let toughness = 13;
document.getElementById('lifePower').onkeyup = function(){
  if(this.value.length == 0) {
    document.getElementById('power').innerHTML = '';
    return;
  }
  let setPower = parseInt(this.value);
  if(isNaN(setPower)) return;
  document.getElementById('power').innerHTML = power - setPower;
  let setToughness = parseInt(this.value);
  if(isNaN(setToughness)) return;
  document.getElementById('toughness').innerHTML = toughness - setToughness;
};
document.getElementById('lifePower').onkeyup();






