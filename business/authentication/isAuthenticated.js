const jwt = require("jsonwebtoken");

const isAuthenticated = (req,res,next)=>{
    if(req.method === "OPTIONS"){
        next();
    }
    const authHeader = req.get('Authorization');
    if(!authHeader){
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if(!token || token === ''){
        req.isAuth = false;
        return next();

    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token,"thisisjustapocapp&é12\"'34")    
    } catch (error) {
        req.isAuth = false;
        return next();
    };
    
    if(!decodedToken){
        req.isAuth = false;
        return next();
    };
    req.isAuth = true;
    req.user = decodedToken;
    next();
    
}

module.exports = { isAuthenticated }