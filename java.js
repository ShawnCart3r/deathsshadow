
//power
let power = 13;
document.getElementById('lifeTotal').onkeyup = function(){
  if(this.value.length == 0) {
    document.getElementById('power').innerHTML = '';
    return;
  }
  let number = parseInt(this.value);
  if(isNaN(number)) return;
  document.getElementById('power').innerHTML = power - number;
};
document.getElementById('lifeTotal').onkeyup();

//toughness
let toughness = 13;
document.getElementById('lifeTotal').onkeyup = function(){
  if(this.value.length == 0) {
    document.getElementById('toughness').innerHTML = '';
    return;
  }
  let number = parseInt(this.value);
  if(isNaN(number)) return;
  document.getElementById('toughness').innerHTML = toughness - number;
};
document.getElementById('lifeTotal').onkeyup();




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