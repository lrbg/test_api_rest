"use strict";
var axios = require('axios');
var FormData = require('form-data');

//---------------------------------------------------------------------------
const createData = async () => {
  var data = JSON.stringify({
    "name": "morpheus",
    "job": "leader"
  });
  var config = {
    method: 'post',
    url: 'https://reqres.in/api/users',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  }; 
   const responseData = await axios(config);
   return responseData;
  }
 //---------------------------------------------------------------------------

 //---------------------------------------------------------------------------
 const createData2 = async () => {
  var data = JSON.stringify({
    "firstname": "GGS",
    "lastname": "FINCH",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2018-01-01",
      "checkout": "2019-01-01"
    }
  });
  
  var config = {
    method: 'post',
    url: 'https://restful-booker.herokuapp.com/booking',
    headers: { 
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  const responseData = await axios(config);
  return responseData;
 }
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
 const getDataById = async (id) => {
  var config = {
    method: 'get',
    url: 'https://reqres.in/api/users/'+id,
    headers: { }
  };
  const responseData = await axios(config);
   return responseData;
 }
 //---------------------------------------------------------------------------

//---------------------------------------------------------------------------
const getToken = async () => {
  var data = JSON.stringify({
    "username": "admin",
    "password": "password123"
  });
  
  var config = {
    method: 'post',
    url: 'https://restful-booker.herokuapp.com/auth',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  const responseData = await axios(config);
   return responseData;
}
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
const deleteData = async (stToken, id) => {
  var data = new FormData();
  var config = {
    method: 'delete',
    url: 'https://restful-booker.herokuapp.com/booking/'+id,
    headers: { 
      'Cookie': 'token='+stToken, 
      'Content-Type': 'application/json', 
      ...data.getHeaders()
    },
    data : data
  };

const responseData = await axios(config);
return responseData;
}
//---------------------------------------------------------------------------



  module.exports = {createData, getDataById, getToken, deleteData};