import {Schema, model} from  'mongoose'

const listSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    fields: {
        type: Array,
        default: [{
            thing: {
                type: String,
            },
            doit:{
                type: Boolean
            },
            much: {
                type: Number,
            }
        }]
    },
    users: {
        type: Object,
        required: true,
        default: {
            author: {
                type: String,
                required: true
            },
            allowedUsers: {
                type: Array,
            }
        }
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model("List", listSchema)