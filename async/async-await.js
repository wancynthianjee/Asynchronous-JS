//1. Write an asynchronous function that accepts a message string
 //and a delaytime in milliseconds. The function should log the
//message to the console after thespecified delay time.
let happyMoments = ()=>{
    console.log('Today I have a good feeling');
};

let otherMoments = ()=>{
    console.log('Im not happy now');
};

happyMoments();
setTimeout(otherMoments,5000);
//3.You have an array of user IDs and a function getUserData(id) that returns a 
//Promise with user data when given a user ID. Write an asynchronous function that 
//fetches and logs the data for each user ID one by one, in sequence.
// let id = true;

// let getUserDataa = new getUserDataa(function(name,id){
//     if(getUserData){
//         setTimeout(()=>{name('The id data details  are correct');});
    
//     }
//     else{
//        setTimeout(()=>{id("Invalid id data details");});

//     }
    
// });
// const getUserData= async()=>{
//     let response= await promise;
//     console.log({response});
// };
// getUserData().then(()=>{console.log('The values are working');})
// .catch(()=>{console.log('Why are they not working');})
// .finally(()=>{console.log('I am satisfied with the resulst ');});
// console.log({getUserData});
// const details1= new Details('Belinda','Jolly','Essy','Garen'
// [2034,456,1234,5678,8903,0987,37823,7856]);

// console.log(getUserDataa());
// getUserData();


// You have an asynchronous function performTask() 
// that returns a Promise. The Promise resolves if the task is successful and rejects 
// if there's an error. Write a function that calls performTask() and logs
//  a custom success message if the task is successful, 
// and a custom error message if there's an error.
let performTask= true;

let promise = new Promise(function(resolve,reject){
    if(performTask){
        setTimeout(()=>{resolve('task perform successful')},3000);
    
    }
    else{
        setTimeout(()=>{reject('task perform is a fail')},3000);
    }
});
let moretask = ()=>{
    console.log('clean up the house');
}
moretask();


const performTasks= async()=>{
    let response= await promise;
    console.log({response});
};
performTask();



  
