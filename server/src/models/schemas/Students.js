const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    documentId: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true,
    },

    cp: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },

    courses: [
        {
            type: ObjectId,
            ref: 'Courses',
            required: true
        }
    ]
})