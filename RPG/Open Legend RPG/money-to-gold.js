const copperCost   = 0.5
const silverCost   = 20 * copperCost 
const goldCost     = 20 * silverCost
const platinumCost = 400 * goldCost

const getPlatinum = money => Math.floor(money / platinumCost) 
const getGold     = money => Math.floor(money % platinumCost / goldCost) 
const getSilver   = money => Math.floor(money % goldCost     / silverCost) 
const getCopper   = money => Math.floor(money % silverCost   / copperCost) 

const money2gold = money => 
  (getPlatinum(money) >= 1 ? getPlatinum(money) +' platina ' : '') +
  (getGold(money)     >= 1 ? getGold(money)     +' ouro '    : '') +
  (getSilver(money)   >= 1 ? getSilver(money)   +' prata '   : '') +
  (getCopper(money)   >= 1 ? getCopper(money)   +' cobre'    : '')

const money = 60.00

console.log(money2gold(20))
console.log(money2gold(10))
console.log(money2gold(5))
console.log(money2gold(30))
console.log(money2gold(500))