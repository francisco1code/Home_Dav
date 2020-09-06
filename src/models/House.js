import {Schema, model} from moogose;

const HouseSchema = new Schema ({
    thumbnail: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Types.Objectid,
        ref: 'User'
    }

})

export default model('House',HouseSchema);