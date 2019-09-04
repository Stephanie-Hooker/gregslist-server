// @ts-ignore
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const _model = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  imgUrl: { type: String, default: 'https://placehold.it/200x200' },
  description: { type: String, maxlength: 300 }

})
export default class CarService {
  get Repository() {
    return mongoose.model('car', _model)
  }
}
