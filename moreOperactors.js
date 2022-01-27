// ---------------------SPREAD OPERATOR-------------------
    let person = [{name: "john", age: 34}]

    const NewPerson = [...person, {name: "john", age: 34}]

    // const personCopy = [...person.name]

    // console.log(NewPerson)


// -----------------------REST PARAMETER-------------

    const multiplyTogether = (x , y) => {
        return x * y
    }

    const array = [1,2,3,4,5,6,7,8,9,10]

    // console.log(multiplyTogether(1,2,3,4,5,6))

    const multiLog = (...input) =>{
        input.forEach(eachInput => {console.log(eachInput)})
    }

    // multiLog(array, 'this' , person)


// ----------------------DESTRUCTING ASSIGNMENT--------------
    const nums = [1,2,3,4,5]
    const userData = ['John', 35, 'Pizza', "toyota"]

    // let [userName, age, favorite] = userData
    let [userName, age, ...restOfTheData] = userData // annything after age or index 1 is put as array in restOfTheData

    let [first, second, third, fourth, fifth] = nums
    // console.log(first, third) expect 1 amd 3
    // console.log(userName) expect John
    // console.log(restOfTheData) expected [ 'Pizza', 'toyota' ]

    //  Destructing Objects

    const person2 = {
        name: 'joanathan',
        ageOfthisPerson: 34,
        favorites : {
            foods: ['pizza' , 'tacos'],
            cars : ['honda', 'toyota']
        }
    }

    let {ageOfthisPerson : whatever} = person2;
    var {favorites: {cars : vroom}} = person2;
    console.log(vroom)


