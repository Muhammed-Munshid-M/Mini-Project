const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        console.log(token,'fhhhhhhhhhhhhhhhhhhhhhh');
        jwt.verify(token,process.env.JWT_SECRET, (err,decoded)=> {
            if(err) {
                console.log('ok error');
                return res.status(401).send({
                    message:"Auth failed",
                    success:false
                })
            } else {
                console.log('decoded'+decoded.id);
                req.body.userId = decoded.id
                console.log('ok success');
                next()
            }
        })
    } catch (error) {
        return res.status(401).send({
            message:"Auth failed",
            success:false
        })
    }
}