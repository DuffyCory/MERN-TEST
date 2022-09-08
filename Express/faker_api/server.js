const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.json());
const { faker } = require('@faker-js/faker');


//Database
const createUser = ()=>{
    return{
        _id:faker.datatype.uuid(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        phoneNumber:faker.phone.number(),
        email:faker.internet.email(),
        password:faker.internet.password()
    }
}

const createCompany = ()=>{
    return{
        _id:faker.datatype.uuid(),
        name: faker.name.findName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

const createBoth = () =>{
    const user = createUser();
    const company = createCompany();
    users.push(user);
    companies.push(company);
    console.log(user, company)
    return {user, company}
}

const users = []
const companies = []

//Routes
app.post('/api/users/new', (req, res)=>{
    const user = createUser()
    users.push(user);
    res.json(user)
})

app.post('/api/companies/new', (req, res)=>{
    const company = createCompany()
    companies.push(company)
    res.json(company)
})

app.post('/api/user/company', (req, res)=>{
    const both = createBoth()
    res.json(both)
})

app.listen(PORT, () =>{
    console.log("Server is up an running")
} )