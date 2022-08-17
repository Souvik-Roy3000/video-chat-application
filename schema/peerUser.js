const mongoose = require("mongoose");
const peerUser = mongoose.Schema({
  peerId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  audio: {
    type: Boolean,
    required: true,
  },
  video: {
    type: Boolean,
    required: true,
  },
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  }
});

module.exports = new mongoose.model("peerUser", peerUser);
