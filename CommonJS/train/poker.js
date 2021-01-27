/**
 * 2. 扑克牌构造函数（类）
   1. 属性
      1. 花色（1~4，♣、♥、♦、♠）
      2. 牌面（1~15，14小王，15大王）
   2. 方法
      1. toString：得到该扑克牌的字符串
 */
function Poker(color, number) {
    this.color = color;
    this.number = number;
}
Poker.prototype.toString = function () {
    // 获取牌面
    let str = '';
    switch (this.color) {
        case 1:
            str = '♣';
            break;
        case 2:
            str = '♥';
            break;
        case 3:
            str = '♦';
            break;
        case 4:
            str = '♠';
            break;
    }
    if (this.number <= 10) {
        str += this.number;
        return str;
    } else {
        switch (this.number) {
            case 11:
                return (str += 'J');
            case 12:
                return (str += 'Q');
            case 13:
                return (str += 'K');
            case 14:
                return (str += 'joker');
            case 15:
                return (str += 'JOKER');
            default:
                return '请重新输入';
        }
    }
};

module.exports = Poker;
