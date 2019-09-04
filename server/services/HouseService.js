
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  levels: { type: Number },
  year: { type: Number },
  price: { type: String, required: true },
  description: { type: String, maxlength: 300 },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' }

})
export default class HouseService {
  get Repository() {
    return mongoose.model('house', _model)
  }
}