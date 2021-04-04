"use strict";

require('dotenv').config();
const {app} =require('../src/server');
const base64=require('base-64');
const supergoose = require('@code-fellows/supergoose');
const request=supergoose(app);


describe('basic auth',()=>{
    it('POST to /signup to create a new user', async () => {
        const obj = {
          username: 'bayan',
          password: '1234',
        };
        const response = await request.post('/api/v1/signup').send(obj);
        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('bayan');
    });

    it ('Should create new user and return record', async () => {
        let user = base64.encode(`bayan:1234`);
        let response = await request
          .post('/api/v1/signin')
          .set(`Authorization`, `Basic ${user}`);
        //   console.log("uhsuhskas",response.body);
        expect(response.body.username).toEqual('bayan');
        expect(response.status).toEqual(200);
    });
    
    
    it('Do the routes assert the requirements (signup/signin)', async () => {
		const response = await request.get('/');
		expect(response.status).toEqual(404);
	});

});