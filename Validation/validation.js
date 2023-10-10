const user = require('./schema')

  const Validation= async (req, res, next) => {
    const value =  user.validate(req.body);
    console.log(value)
    if (value.error) {
      res.status(200).json({ message: value.error.details[0].message });
    } else {
      next();
    }
  }
module.exports=Validation;