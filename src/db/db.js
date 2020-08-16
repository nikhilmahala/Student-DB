const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
})

mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection error:'));