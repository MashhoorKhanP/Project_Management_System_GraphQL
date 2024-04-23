const express = require("express");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT;

const app= express();

connectDB();

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === "development"
}))

app.listen(port, console.log(`Server running at ${port}`.yellow));