//1
let myPhone = 'iphone'
const myName = 'tanvir'
const myBrother = {
    name: 'tanjid',
    age: '29'
}
//2

const mySummury = `my name is ${myName}. my brother name is ${myBrother.name}.He is ${myBrother.age} old`
// console.log(mySummury)

//3.1

const valueNumber = number => number / 5;
const output = valueNumber(15);
// console.log(output)

//3.2

const addMultiple = (x, y) => (x + 2) * (y + 2);

const result = addMultiple(2, 3)
// console.log(result)

//3.3

const myMoney = (x, y, z) => x * y * z;
const result1 = myMoney(2, 3, 4);
// console.log(result1);

//3.4

const multiLine = (x, y,) => {
    const a = x + 2;
    const b = y + 2;
    const result3 = a * b;
    return result3
}

// console.log(multiLine(2, 3))

//4 search done and 4.5 also done

// 5

const myTaka = [2, 3, 4, 5, 6, 7, 8];

const myTakaDouble = myTaka.map(x => x * 5);
// console.log(myTakaDouble);

//6
const oddNumber = myTaka.filter(x => x % 2);
console.log(oddNumber)
