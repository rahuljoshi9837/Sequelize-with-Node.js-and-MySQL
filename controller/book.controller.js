const { DataTypes } = require("sequelize");
const databaseConnection = require("../database/function");

const Book = databaseConnection.define("books", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
    subject: {
        type: DataTypes.INTEGER,
    }
});
databaseConnection.sync().then(() => {
    // ------ Insert Query ------ //
    console.log('Book table created successfully!');
    for (let i = 0; i <= 5; i++) {
        Book.create({
            title: `Sequelizer ${i}`,
            author: `Rahul Joshi ${i}`,
            release_date: "2021-12-14",
            subject: i
        }).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
    }
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

// ----- Select All the records query ----- //
databaseConnection.sync().then(() => {
    Book.findAll().then(res => {
        console.log(res, "this is select query !!")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});

// ----- Selecting with the where Clause ----- //
databaseConnection.sync().then(() => {
    Book.findOne({
        where: {
            id: "50"
        }
    }).then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

// ----- Deleting a Record ----- //
databaseConnection.sync().then(() => {
    Book.destroy({
        where: {
            id: 50
        }
    }).then(() => {
        console.log("Successfully deleted record.")
    }).catch((error) => {
        console.error('Failed to delete record : ', error);
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
});