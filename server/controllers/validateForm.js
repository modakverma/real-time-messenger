const Yup = require("yup");

const formSchema = Yup.object({
    username: Yup.string().required("username required").min(6,"username too short").max(28,"username too long"),
    password: Yup.string().required("password required").min(6,"password too short").max(28,"password too long"),
})

const validateForm = (req,res,next)=>{
    const formData = req.body;
    formSchema.validate(formData)
    .catch(err=>{
        res.status(422).send();
        console.log(err.errors)
    }).then(valid =>{
        if(valid){
            console.log("form is good");
            next();
        }
        else{
            res.status(422).send();
        }
    })
}

module.exports = validateForm