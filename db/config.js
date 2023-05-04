const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connection = (mongoose.connection = async () => {
  await mongoose.connect(`mongodb+srv://roshan836sharma:n50eOSWaSwYqpREm@cluster0.anxdawu.mongodb.net/test`);
});

module.exports = connection;
