let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 24,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]
// const genderCount = (array) => {
//     let male = 0;
//     let female = 0;
//     for (let i = 0; i < array.length; i++){
//         if (array[i].gender == "female") {
//             female++;
//         } else {
//             male++;
//         } 
//     }
//     return {male, female}
// };

// console.log(genderCount(students));


// const averageAge = (array) => {
//     let sum = 0;
//     for (let i=0; i < array.length; i++) {
//         sum += array[i].age;
//     }
//     return sum / array.length;
// };
// console.log(averageAge(students));


// console.log({...students[0], lastname: "hello"});


// let obj 
// array.forEach((element) => {
//     if (obj[element.gender]) {
//         obj[element.gender]++;
//     } else {
//         obj[element.gender] = 1;
//     }
// });
// return obj;



const sameAge = (array) => {
    let obj;
    for (let i = 0; array[i].age < array[5].age; array[i].age++) {
        if (array[0].age == array[i].age) {
            return obj;
        }
    }
}
console.log(sameAge(students));