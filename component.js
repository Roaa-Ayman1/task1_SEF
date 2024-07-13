const fs = require('fs');

const readData = _ => {
    try {
        const dataJSON = fs.readFileSync("data.json");
        return JSON.parse(dataJSON);
    } 
    catch {
        return [];
    }
}

const writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data));
}


const addPerson = (id, fname, lname, city, age) => {
    const data = readData();

    const duplicatedData = data.filter( obj => {
        return obj.id == id;
    })

    if(duplicatedData.length == 0) {
        data.push({id, fname, lname, city, age});
        writeData(data);
    }
    else
        console.log("This ID already exists in database");
}

const deletePerson = id => {
    const data = readData();

    const updatedData = data.filter( obj => {
        return obj.id != id;
    })

    writeData(updatedData);
}

const getPerson = id => {
    const data = readData();

    const person = data.find( obj => {
        return obj.id == id;
    })

    if(person)
        console.log(person);
    else
        console.log("This ID is not found");

}

const listMembers = _ => {
    const data = readData();

    data.forEach( obj => {
        console.log("ID:", obj.id,", name:", obj.fname, obj.lname);
    });
}

module.exports = {
    addPerson,
    deletePerson,
    getPerson,
    listMembers
}