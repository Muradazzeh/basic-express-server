`use strict `
const server=require("../Src/server")
const supertest= require('supertest')
const request= supertest(server.app)

describe("API server", () =>{
    test('Getting data from main page', async () => { 
        const respons = await request.get('/');
        expect(respons.status).toEqual(200);
        expect(respons.text).toEqual("Welcom to the main page")
     })
test("handle page not found", async ()=>{
    const respons= await request.get('/ddddddd')
    expect(respons.status).toEqual(404);
    
})
test("handle bad method", async () =>{
    const respons = await request.post("/person?name=name")
    expect(respons.status).toEqual(404);
})

test("Handle server error", async ()=>{
    const respons = await request.get('/person?1')
    expect(respons.status).toEqual(500);
} )

})