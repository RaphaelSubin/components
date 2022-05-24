const mongoClient = require("mongodb").MongoClient;
console.log("process.env.MONGODB_URI: ", process.env.MONGODB_URI);
mongoClient.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) throw err;
    console.log("mongo Connected");
  }
);

module.export = mongoClient;
