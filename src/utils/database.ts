import mongoose from 'mongoose';

const dbConnectionURL = `${process.env.DB_CONNECTION_URL}`;

let connection;
let isPreviousConnectionAvailable = false;

export const db = (() => {
  if (!isPreviousConnectionAvailable) {
    connection = mongoose.createConnection(dbConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true });
    isPreviousConnectionAvailable = true;
  }

  return connection as mongoose.Connection;
})();
