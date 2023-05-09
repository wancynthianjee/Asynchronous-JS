
// function fetchAndLogUserData(ids) {
//     return ids.reduce(async (previousPromise, id) => {
//       await previousPromise;
//       try {
//         const userData = await getUserData(id);
//         console.log(userData);
//       } catch (error) {
//         console.error(error);
//       }
//     }, Promise.resolve());
//   }
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error. 
//  Write a function that calls performTask() and logs a custom success message if 
//  the task is successful,and a custom error message if there's an error

