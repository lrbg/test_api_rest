'use strict'

const supertest = require("supertest");
const { createData, getDataById, getToken, deleteData } = require("./helper/requestData");


//------------------------------------------------
describe("[TEST] Validating test flow API REST", () => {
    let insertData = {};
    let tokenData = {};
    test("The endpoint should respond with a 200 status code, and a new Booking ID should be provided.", async () =>{
          const resp = await createData();
          const responseData = resp.data;
          const responseStatusCode = resp.status;
          expect(responseStatusCode).toEqual(201)
          insertData = responseData;
          
    });

    test("The endpoint should respond with a 200 status code, and the booking should have the data we used on step 1", async () =>{
        let  datainsert = insertData;
        let idData = datainsert.id;
        const resp = await getDataById(2);
        const responseData = resp.data;
        const responseStatusCode = resp.status;
        expect(responseStatusCode).toEqual(200)
    });

    test("The endpoint should respond with a 200 status code, and a new Token should be generated.", async () =>{
        const resp = await getToken();
        const responseData = resp.data;
        const responseStatusCode = resp.status;
        expect(responseStatusCode).toEqual(200)
        tokenData = responseData;
    });

    test("The endpoint should respond with a 201 status code, and the Created message.", async () =>{
       let token = tokenData;
       let datainsert = insertData;
       let stToken = token.token;
       let idData = datainsert.id;
       const resp = await deleteData(stToken, idData);
       const responseData = resp.data;
       const responseStatusCode = resp.status;
       expect(responseStatusCode).toEqual(201)
    });

    test("The endpoint should respond with a 404 status code, and with a Not Found message.", async () =>{
        let  datainsert = insertData;
        let idData = datainsert.id;
        const resp = await getDataById(idData);
        const responseData = resp.data;
        const responseStatusCode = resp.status;
        expect(responseStatusCode).toEqual(404)
    });
//------------------------------------------------

});
