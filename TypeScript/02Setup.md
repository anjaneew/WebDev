# Setup

1. Node.js > check if you have this by 

    ``node -v``

2. Install TypeScript

    * ```npm install -g typescript ```  

    * ```tsc -v```

3. Create Your First Application

    * new folder
    * new file called `index.ts`
    * write code ex:    ```console.log(Math.floor(11.3));```

4.  Running the Code

    * cd to the folder 
    * compile   ```tsc```
    * it will generate a JS file. This can run using Node.js
    * ```node filename.js```

5.   Configuration  

    * Create a `src` folder.  
    * Move the `index.ts` file into the newly created `src` folder.   
    * (you better delete the previously created JS file manually)  
    * (you must be in root folder now)  
    * Generate a tsconfig.json File:    
             ```tsc --init```  
    * check if these two lines are commented - (I had to uncomment manually)  
        ```// File Layout   ```  
        ```"rootDir": "./src",```  
        ```"outDir": "./dist",```  

    *  compile      
    ```tsc```  
    *  it will generate a JS file. This can run using Node.js    
        ```node  dist/filename.js```      