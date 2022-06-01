`use strict`
const logger=require("../Src/Middle-ware/Logger")

describe("logger test", ()=>{
    let consoleSpy;
    let req={};
    let res={};
    let next= jest.fn()

    beforeEach(()=>{
        consoleSpy=jest.spyOn(console,"log")
    })

    test('Somthing happen in the console', () => { 
        logger(req,res,next)
        expect(consoleSpy).toHaveBeenCalled();
     })
     test('for the next call', () =>{
         expect(next).toHaveBeenCalled();

     } )

})