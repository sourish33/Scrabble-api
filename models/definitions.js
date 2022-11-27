const mongoose = require('mongoose')

const DefinitionsSchema = new mongoose.Schema({
    Word: {
        type: String,
        required: true,
        trim: true
    },
    Definition: {
        type: String,
    },
})


module.exports = mongoose.model('Definition', DefinitionsSchema);