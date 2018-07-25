const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String
    },

    documentId: {
        type: String,
        required: true,
        unique: true
    },

    occupation: {
        type: String
    },

    titles: {
        type: String
    },    

    email: {
        type: String,
        required: true
    },

    twitter: {
        type: String
    },

    linkedin: {
        type: String
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