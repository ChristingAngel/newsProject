const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://liaobaifeng:lbf789474@company-system.dveamsp.mongodb.net/?retryWrites=true&w=majority')
const connection = 'mongodb+srv://liaobaifeng:lbf789474@company-system.dveamsp.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB连接成功');
  })
  .catch(err => {
    console.error('MongoDB连接失败: ' + err);
  });