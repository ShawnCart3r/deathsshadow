let power =  ("13");
let toughness = ("13");

document.getElementById("strength").innerHTML = power
document.getElementById("defense").innerHTML = toughness 


document.getElementById("myBtn").addEventListener("click", displayLifeTotal)

function displayLifeTotal(){
document.getElementById("lifeTotal").innerHTML = Life();
}

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