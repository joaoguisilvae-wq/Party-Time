const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://joaoguisilvae_db_user:28DgRMkw0KtEoXkI@cluster0.8wqe7te.mongodb.net/?appName=Cluster0",
    );
    console.log("Conectado!");
  } catch (error) {
    console.log("aaa");
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
