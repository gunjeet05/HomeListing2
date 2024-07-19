

/**
 * 
 * Since we have to deploy this project we have to use package.json for backend in root folder and not in that folder 
 * Set type:"module"  to use ES6 import from in package.json
 * command mv .git ../ to set git at parent folder
 * 
 * 

    *.env file should be place at root level 
    *.npm i dotenv
    * dotenv.config()
    * Don't enter semicolon after variable in .env files
    * if you will put const and let in .env file then values will be undifined
 


    *It is mandatory to specify extesion of file in ES6 module imp
    *We can rename our imports in default export but not in named export

* 
 * 
 */

import { set } from "mongoose";


/**
 * Learning promises and async await
 * We can handle aysnchronous operations using callback functions and promises
 */
//Using callback 

// function func1(callback){
    
//     setTimeout(() => {
//         let data ="Data 2";
//         callback(data);
        
//     }, 2000);

   


// }


// function func2(data){
//     console.log("data", data);
// }

// func1(func2);

/**
 * Issues due to callback 
 * Callback hell 
 * 
 */

/**
 * 
 * 
 * Promises are better way of handling asynchronous operations 
 * Promises are object which store completion, failure of operations 
 * 
 * 
 */


/**
 * Async await are built on top of Promises
 * Serial and parallel execution of something 
 * Await means next line of function will not run all other thing outside function will run.
 * 
 * 
 */


function function2() {
    setTimeout(() => {
      console.log("Gunjeet");
    }, 2990);
  }
  
  const function1 = async (name) => {
    await new Promise(resolve => setTimeout(resolve, 2990));
    console.log("Running");
  };

  function1("")