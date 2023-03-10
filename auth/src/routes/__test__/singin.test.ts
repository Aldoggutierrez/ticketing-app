import request from "supertest";
import { app } from "../../app";

it('fails when a email that does not exist is supplied', async () => {
    await request(app)
    .post('/api/users/singin')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(400)
})

it('fails when an incorrect password is supplied', async () => {
    await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)

    await request(app)
    .post('/api/users/singin')
    .send({
        email: "test@test.com",
        password: "dajkhdkja"
    })
    .expect(400)
})

it('response witha cookies wen given valid credentials', async () => {
    await request(app)
    .post('/api/users/singup')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(201)

    const response = await request(app)
    .post('/api/users/singin')
    .send({
        email: "test@test.com",
        password: "password"
    })
    .expect(200)

    expect(response.get("Set-Cookie")).toBeDefined()
})