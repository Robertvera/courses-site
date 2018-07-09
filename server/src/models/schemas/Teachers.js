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

    occupation: {
        type: String,
        required: true,
    },

    titles: {
        type: String,
        required: true,
    },    

    email: {
        type: String,
        required: true
    },

    twitter: {
        type: String,
        required: true
    },

    linkedin: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String        
    },

    courses: [
        {
            type: ObjectId,
            ref: 'Courses',
            required: true
        }
    ]
})