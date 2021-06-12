class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res
    }
    attack(target) {
        target.res -= this.power
        console.log(`${target.name} has been attacked, reducing resilience by ${this.power}`)
        console.log('target res:'+target.res)
    }
}
class Effect extends Card {
    constructor(name, cost, stat, magnitude, text){
        super(cost)
        this.name = name;
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }
    play(target){
        let targetStat = this.stat
        if( target instanceof Unit) {
            console.log(this.text);
            target[targetStat] += this.magnitude;
            console.log(target);
        
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const redBelt = new Unit('Red Belt Ninja', 3, 3, 4)
const hardAlgo = new Effect('Hard Algorithm', 2, 'res', 3, 'increase target resilience by 3')
const effect2 = new Effect('Unhandled Promise Rejection', 1, 'res', -2, "reduce target's resilience by 2" )
const effect3 = new Effect('Pair Programming', 3, 'power', +2, `increase target's power by 2`)
hardAlgo.play(redBelt)
// turn 1 done
const blackBelt = new Unit('Black Belt Ninja', 4, 5, 4)
effect2.play(redBelt)
// turn 2 done
effect3.play(redBelt)
redBelt.attack(blackBelt)
