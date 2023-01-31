import request from "supertest";
import { app } from "../../app";

it('returns 201 on succesful singup', async () => {
    return request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)
})

it('returns 400 with a invalid email', async () => {
    return request(app)
    .post('/api/users/singup')
    .send({
        email: "test",
        password: "password"
    })
    .expect(400)
})

it('returns 400 with a invalid password', async () => {
    return request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "p"
    })
    .expect(400)
})

it('returns 400 with a missing email and password', async () => {
    await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com"
    })
    .expect(400)

    return request(app)
    .post('/api/users/singup')
    .send({
        password: "password"
    })
    .expect(400)
})

it('disallows duplicate emails', async () => {
    await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)

    await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(400)  
})

it('sets a cookie after succesful signup', async () => {
    const response = await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)  

    expect(response.get("Set-Cookie")).toBeDefined()
})