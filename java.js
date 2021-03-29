
//power
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

//toughness





const life = {
    power: '1',
    toughness: '1',
    lifeTotal: '20',

    calcLife: function(){
  return 13 - this.power;
    },
    calcTotal: function(){
        return 13 - this.toughness;

    }

};

console.log(life.calcLife());
console.log(life.calcTotal())