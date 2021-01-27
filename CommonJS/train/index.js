/**
 * 3. 入口模块（入口文件）
   1. 创建54张扑克牌
   2. 洗牌
   3. 发牌
 */
// 引入模块
const Poker = require('./poker');
const { sortRadom } = require('./tools');
//创建54张牌
let poker = [];
for (let i = 1; i <= 13; i++) {
    for (let j = 1; j <= 4; j++) {
        poker.push(new Poker(j, i).toString());
    }
}
poker.push(new Poker(null, 14).toString(), new Poker(null, 15).toString());
// 创建洗牌方法
poker = sortRadom(poker);
// 发牌
let gamer1 = [],
    gamer2 = [],
    gamer3 = [],
    desk = [];
function deal(poker, gamer) {
    for (let i = poker.length - 1; i >= 0; i--) {
        gamer.push(...poker.splice(Math.random() * i, 1));
        if (gamer.length == 17) {
            break;
        }
    }
}
deal(poker, gamer1);
deal(poker, gamer2);
deal(poker, gamer3);
desk = [...poker];
console.log('玩家1', gamer1.join(','));
console.log('玩家2', gamer2.join(','));
console.log('玩家3', gamer3.join(','));
console.log('桌子', desk.join(','));
