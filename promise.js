//there are three state of promise
// 1. pending
// 2. resolved
// 3. rejected

const promiseOne = new Promise((resolve,reject)=>{
    //async operation like fetching data from server network request
    setTimeout(()=>{
        // console.log("Data received successfully");
        resolve("Data received successfully");
    }, 3000);
})
// to connect the promise with then method we use then method and we call resolve method inside then method.

promiseOne.then(()=>{
    // console.log("Promise resolved");
})


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("Data received successfully");
        resolve("Data received successfully");
    }, 3000);
}).then(()=>{
    // console.log("Promise resolved");
})


const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"adi", email:"abd@gmail.com"})
    },1000)
})
promise3.then((user)=>{
    // console.log(user);
})

//with error

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"adi", password:"1234"})
        }else{
            reject("Error: Could not fetch the data")
        }      
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise completed");
})

const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"cartoon", password:"1234"})
        }else{
            reject("Error: cartoon gussa hai")
        }      
    },1000)
})

async function fetchData(){
    try{
        const data = await promise5;
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

fetchData();
