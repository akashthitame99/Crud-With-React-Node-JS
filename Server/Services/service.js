const db = require("../Config/database");
module.exports = {
  signup: (data, callBack) => {
    db.query(
      "insert into registration (username, email,password, password2 )values(?,?,?,?)",
      [data.username, data.email, data.password, data.password2],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
