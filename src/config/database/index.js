const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/VocaEdu')
        console.log('connectd db successfully...')
    } catch (error) {
        console.log('Connect failure!!');
        console.log(error);
    }
}

module.exports = {connect}