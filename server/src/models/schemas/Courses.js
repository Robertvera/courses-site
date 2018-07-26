const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    excerpt: {
        type: String      
    },

    price: {
        type: Number
    },

    image: {
        type: String
    },    

    pdf: {
        type: String
    },

    teachers: [
        {
            type: ObjectId,
            ref: 'Teachers'
        }
    ],

    students: [
        {
            type: ObjectId,
            ref: 'Students'
        }
    ],

    capacity: [
        {
            type: Number
        }
    ],

    location: [
        {
            type: String
        }
    ]
})