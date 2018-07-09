const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    excerpt: {
        type: String,
        required: true,        
    },

    price: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },    

    pdf: {
        type: String,
        required: true
    },

    teachers: [
        {
            type: ObjectId,
            ref: 'Teachers',
            required: true
        }
    ],

    students: [
        {
            type: ObjectId,
            ref: 'Students',
            required: true
        }
    ]
})