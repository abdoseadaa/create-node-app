const mongoose = require('mongoose')



exports.local_db_connect = () => {

    mongoose.connect(process.env.MONGO_COMPASS, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log('> Connected...'.green))
        .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))


}

exports.online_db_connect = () => {

    mongoose.connect(process.env.MONGO_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((res) => console.log('> Connected...'.green))
        .catch(err => console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red))


}