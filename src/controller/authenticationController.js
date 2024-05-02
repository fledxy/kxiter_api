const pool = require('../config/database').default
const sign = require("jsonwebtoken")

let login = async (req,res) => {
    let {username, password} = req.body
    
    await pool.execute(`INSERT INTO Authentication (username, password) VALUES (?,?);`,[ username , password],)
        
    return res.status(201).json({status : "201", messages: "Succesful Login"});  

        
}
let register = async (req, res) => {
 

}
module.exports = {
    login,
    register
}