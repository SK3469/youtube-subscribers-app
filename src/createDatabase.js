const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://sunilk3469:ZXM8w0NdJPiomFhC@cluster0.viaug.mongodb.net/";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()