// Asyncronic code runs top to bottom but does not wait for a line to finish before going to the next line

    const x = 5;

    function addtoX(a){
        return a + x
    }

    setTimeout(() => {
        // console.log('this ran after 2 seconds')
    }, 2000);

    // console.log(addtoX(5)) this line will run after line 10 but wil output before 

/////////////////////////
/////// PROMISE /////////
///////////////////////// 

    // anything that takes time in js we use PROMISE

    const data = {a:'1', b:'2'}

    const fetchData = () =>{

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                try{
                    // throw new Error("there was an error with the Promise") // Toggle comment for Error
                    resolve(data)
                }catch(e){
                    reject(e.message)
                }
            }, 2000);
        })

    }

    // console.log(fetchData()) will return a pending promise but not the data

    // fetchData()
    //     .then(result => console.log("resolved promise", result))
    //     .catch(error => console.log(error))
    //     .finally(() => console.log('finally log regardless error or not'))

    // console.log('ran after promise')

    // ---------ASYNC AWAIT-------------
    let asyncAwaitResult
    const logData = async () => {
        try{
            // throw new Error("there was an error with the Promise") // Toggle comment for Error
            const data = await fetchData()
            console.log(data)
            return data
        }catch(error){
            console.log('error', error.message)
        }
        console.log('run regardless')
    }

    asyncAwaitResult = logData()


