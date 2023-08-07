const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({

    option:{
        type: String,
        required: true
    },
    question:{
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    vote:{
        type: Number,
        defaul: 0
    },
    add_vote:{
        type: String
    }
})

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;