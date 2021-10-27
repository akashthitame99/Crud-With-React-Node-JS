const { signup } = require("../Services/service");
module.exports = {
  signup: (req, res) => {
    const body = req.body;
    signup(body, (err, results) => {
      if (err) {

        console.log(res.status(500))
        return res.status(500).json({
          data: results,
          message: "error occurs",
        });
      } else {
        console.log(res.status(200))
        return res.status(200).json({  
          data: results,
          message: "signup successfull",
        });
      }
    });
  },
};
