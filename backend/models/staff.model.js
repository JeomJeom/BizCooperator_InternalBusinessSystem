const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  //Added some validations to the staff_ID field. 
  //It is required and must be unique. Also, white space is trimmed off the end.
  staff_ID: { type: String, required: true, unique: true, trim: true},
  staff_Fname: { type: String, required: true },
  staff_Lname: { type: String, required: true },
  gender: {type: String, required: true},
  nationality: {type: String, required: true},
  identity: {type: String, required: true},
  address: {type: String},
  TFN_no: {type: String},
  date_commence: { type: Date, required: true },
  date_cessation: { type: Date},
  department: {type: String, require: true},
  designation: {type: String, required: true},
}, {
  timestamps: true,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;