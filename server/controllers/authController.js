const pool = require("../db");
const bcrypt = require("bcrypt");
const {v4: uuidv4} = require("uuid")

module.exports.handleLogin = (req,res)=>{
    if(req.session.user && req.session.user.username){
        res.json({loggedIn: true, username: req.session.username})
    }
    else{
        res.json({loggedIn:false});
    }
}

// Login attempt

module.exports.attemptLogin = async(req,res)=>{
    const potentialLogin = await pool.query("SELECT username, passhash, userid FROM users u WHERE u.username=$1",[req.body.username, ])

    if(potentialLogin.rowCount > 0){
     const isSamePass = await bcrypt.compare(
         req.body.password,potentialLogin.rows[0].passhash
         );
         if(isSamePass){
             req.session.user = {
                 username: req.body.username,
                 id: potentialLogin.rows[0].id,
                 userid: potentialLogin.rows[0].userid
             }
             res.json({loggedIn:true, username:req.body.username})
         }
         else{
             console.log("not good")
             res.json({loggedIn:false, status: "Wrong username or password"})
         }
    }
    else{
        console.log("not good")
         res.json({loggedIn: false, status: "Wrong username or password"})
    }
}

// Register

module.exports.registerUsers = async(req,res)=>{

    const existingUser = await pool.query("SELECT username from users WHERE username=$1",
    [req.body.username]
    );
 
    console.log(existingUser)
 
    if(existingUser.rowCount === 0){
     //    register
     const hashedPass = await bcrypt.hash(req.body.password, 10)
     const newUserQuery = await pool.query(
         "INSERT INTO users(username,passhash,userid) values($1,$2,$3) RETURNING id, username, userid",[req.body.username,hashedPass,uuidv4()]
     );
     req.session.user = {
         username: req.body.username,
         id: newUserQuery.rows[0].id,
         userid: newUserQuery.rows[0].userid
     }
     res.json({loggedIn: true, username:req.body.username})
    }
    else{
        res.json({loggedIn:false, status:"Username taken"})
    }
 }

 module.exports.logout = (req,res)=>{
    req.session.destroy(err => {
        if (err) {
          console.error(err);
        } else {
          res.clearCookie('sid');
          res.status(200).json({
              loggedIn:false,
              status:"Logged out successfully!"
          })
        }
      });
 }