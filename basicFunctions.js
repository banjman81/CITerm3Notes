const userData = require('./DataStuff')

// ------------------------------CALL BACK FUNCTIONS--------------------------
    // Calling an fn inside a fn

    const add2s = () => 2 + 2;

    const add4ToResultOfFunction = (functionPassesIn) => {
        return 4 + functionPassesIn()
    }

    // console.log(add4ToResultOfFunction(add2s))

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((response) => response.json())
    //     .then((json) => console.log(json))

// ------------------------------RECURSIVE FUNCTIONS-------------------------
    // fn calling itself until condition is met

    const recur = (input) => {
        if(input == 5){
            return input
        }else{
            
            console.log("Fail, trying again")
            return recur(input + 1)
            // setTimeout(() => {
            //     console.log("Fail, trying again")
            //     return recur(input + 1)
            // }, 2000)
        }
    }

// ------------------------------FUNCTION CLOSURES ----------------------------

    const x = 5 // Global variable

    // var add = (input) => input + x;

    const getAddFunction = () => {
        const x = 5
        var add = (input) => input + x;
        return add
    }

    // console.log(getAddFunction()) will log add()

    const addToX = (input => {
        return x + input
    })

    76

// -------------------------------REDUCE ---------------------------------

    const richUser = userData.reduce((accumulator, user) => {
        const balance = Number(user.balance.replace(/[^0-9.-]/g,"")) // convert balance to Number
        if(balance >= 2000){
            return [...accumulator, 
                // {"user" : user.name, "balance" : user.balance}
                user.name
            ]
        }
        return accumulator
    }, [])

    const userIsRich = userData.map((user) => {
        const balance = Number(user.balance.replace(/[^0-9.-]/g,""))
        if(balance >= 2000){
            return user.name
            // {"name" : user.name ,"balance" : user.balance}
        }
        return
    })

    const filteredRichUser = userData.filter((user) => Number(user.balance.replace(/[^0-9.-]/g,"")) >= 2000) 

    // console.log(richUser, "------reducer-----") exclude undefines
    // console.log(userIsRich, "-----map-----") map also returns undefines
    // console.log(filteredRichUser.map(user => user.name)) filter return whole obj and need maps to output specific data


// --------------------------------SWITCH---------------------------------
    const checkFood =  (food) => {
        switch(food){
            case "apple" : 
                console.log('got an apple')
                break
            case "Taco" : 
                console.log('got a taco')
                break

            default:
                console.log(food, "not apple")
        }

    }

    // checkFood('pie')






// _______________________________________EXPORTS__________________________________________

module.exports = addToX