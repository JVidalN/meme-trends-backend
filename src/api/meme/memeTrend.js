const restful = require('node-restful');
const mongoose = restful.mongoose;

const memeTrendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdDate: { type: Date, min: '2010-01-01', max: '2100-12-31', required: true },
  trendDate: { type: Date, min: '2010-01-01', max: '2100-12-31', required: true },
  meme: { type: String, required: true },
});

module.exports = restful.model('MemeTrend', memeTrendSchema);
