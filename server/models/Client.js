const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String
  }
}, { timestamps: true });

const Client = mongoose.model("Client", ClientSchema);
module.exports = Client;