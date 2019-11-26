import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect(
        'mongodb+srv://admin:rsxp@rsxp-education-zu1as.mongodb.net/test?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useFindAndModify: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log('Connected');
      })
      .catch(e => {
        console.log(`Not connected to db ${e}`);
      });
  }
}

export default new Database();
