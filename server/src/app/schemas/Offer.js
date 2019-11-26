import mongoose, { Schema } from 'mongoose';

const OfferSchema = new Schema({
    sponsor_id: String,
    offer_description: String,
    minimum_points: Number,
});

const offer = mongoose.model('Offer', OfferSchema);

export default offer;
