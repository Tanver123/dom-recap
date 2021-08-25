const name = 'hero'
const fulname = `welcome Home! ${name}`;
// console.log(fulname)

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima']
const array2 = [...nayikas]
// console.log(array2)

const sum = x => x * 2;
const result = sum(2);
// console.log(result)

const company = {
    name: 'iPhone',
    ceo: {
        ceoName: 'ami',
        subCeo: 'tumi',
    },
    work: {
        workName: 'made phone',
        employe: '333',
        employeCetagory: {
            normal: '111',
            high: '222'
        }
    }
}

const { ceoName, subCeo } = company.ceo;
const { normal, high } = company.work.employeCetagory;
// console.log(ceoName, subCeo)
// console.log(normal, high)

// map

const number = [2, 4, 6, 8];

const square = number.map(x => x * x);
console.log(square)
const doubleIt = number.map(x => x * 5);
console.log(doubleIt)
