const yargs = require("yargs");
const component = require("./component");

yargs.command({
    command: "add",
    describe: "Add a new member to database",
    builder: {
        id : {
            describe: "Unique ID of the member",
            demandOption: true,
            type: "string"
        },
        firstName : {
            describe: "The first name of the member",
            demandOption: true,
            type: "string"
        },
        lastName : {
            describe: "The last name of the member",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        component.addPerson(argv.id, argv.firstName, argv.lastName, argv.city, argv.age);
    }
})

yargs.command({
    command: "delete",
    describe: "Delete a member from database",
    builder: {
        id : {
            describe: "Unique ID of the member",
            demandOption: true,
            type: "number"
        }
    },
    handler: argv => {
        component.deletePerson(argv.id);
    }
})

yargs.command({
    command: "get",
    describe: "Get the member data from database",
    builder: {
        id : {
            describe: "Unique ID of the member",
            demandOption: true,
            type: "number"
        }
    },
    handler: argv => {
        component.getPerson(argv.id);
    }
})

yargs.command({
    command: "list",
    describe: "List all member members from database",
    handler: argv => {
        component.listMembers();
    }
})

yargs.parse();