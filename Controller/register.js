const jwt = require("jsonwebtoken");
const database = require("../database/db"); 

const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;

   
    const hashedpassword = await bcrypt.hash(password, 10);
  

    const query1 = "SELECT * FROM register WHERE email=?";

   
    const [rows] = await database.query(query1, [email]);

    if (rows.length > 0) {
      const storedHashedPassword = rows[0].password;

     
      const match = await bcrypt.compare(password, storedHashedPassword);

      if (match) {
        const token = jwt.sign({ email: rows[0].email }, process.env.SECRET_KEY, {
          expiresIn: '1h',
        });
      

        return res.json({ message: 'Login successful', token });
      } else {
        return res.send({message:"Incorrect password"});
      }
    } else {
      const query = "INSERT INTO Register(password, email) VALUES (?, ?)";
      await database.query(query, [hashedpassword, email]);

      return res.json({ message: 'Registered successfully' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error occurred' });
  }
};

const post=(req, res) => {
const {password,email}=req.body
const query=`INSERT INTO login (password,email)
VALUES (?, ?);
 `

const a=database.query(query,[password,email])

res.send("successfully added")


 
  
};


module.exports = { register,post };
