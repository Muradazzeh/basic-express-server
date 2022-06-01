# basic-express-server
**This is the links for my work**
* 
* 
* 


## what I learned from the class2 

* we have 2 way to send data in the header (params,query) and it will shows in the URL , this way it is not secure , the other way sending data by body , this way more secure .

* the common data format in the respons and request is JSON data.

* we learn about Middle were functions ,  these function we call before we getting the respons to do some checks and after that we will get the requierd data 
**middle were types**

    * Global middle were that will applied to all routes 
    ```
    app.use("*")

    ```
    * local middle were , it will apply in the same route that called in


*  we learn to build simple express routes by handling the get request before sending response 
```
app.get("/",(req,res)=>{
    res.status(200).send("Hello")
})
````
* we learn how to do test for the server and for the function in our server using Jest library .
* we learn how to apply middle were function on all routes to log somthing in the terminal , and how we can test it using jest method ,Spyon


### Here were I show my work in the task 

* first this is the tree for my task 
![link](./Src/taskImage/Screenshot%20(140).png)

* then I preper main page route to check the server is working 
* then I handle 404 error not found and 500 server error 
* then I handle the "/person" routes with Middle ware function 
* and I apllied aglobal middle ware for all routes 
![link](./Src/taskImage/Screenshot%20(141).png)

* then I handled the person route when the user will write his name it will show his name and if he did it wrong is will show server error 
![link](./Src/taskImage/Screenshot%20(146).png)
![link](./Src/taskImage/Screenshot%20(147).png)

* and finally I applied jest test for all 
![link](./Src/taskImage/Screenshot%20(149).png)
