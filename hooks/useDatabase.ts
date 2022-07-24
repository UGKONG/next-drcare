const mysql = require("mysql");

const dbConnect = (callback: any) => {
  const db = mysql.createConnection({
    host: "db.drcareunion.com",
    user: "drcarecompany",
    password: "dcc8858^^!",
    database: "dbdrcarecompany",
    dateStrings: true,
    multipleStatements: true,
  });
  callback(db);
};

export default dbConnect;
