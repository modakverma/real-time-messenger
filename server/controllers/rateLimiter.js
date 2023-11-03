const redisClient = require("../redis")

module.exports.rateLimiter = (timeLimit,limitAmount)=> async (req,res,next)=>{
    const ip = req.connection.remoteAddress;
    const [response] = await redisClient
    .multi()
    .incr(ip)
    .expire(ip,timeLimit)
    .exec();
    if(response[1]>limitAmount)res.json({
        loggedIn: false,
        status:"Slow Down! try again in a minute"
    })
    else{
        next();
    }
}