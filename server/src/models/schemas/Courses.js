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
        type: String
    },

    image: {
        type: String
    },    

    pdf: {
        type: String
    },

    capacity: {
        type: String
    },

    location: {
        type: String
    },
    
    date: {
        type: String
    }/* ,

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
    ] */

})