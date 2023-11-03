const Yup = require("yup")

const friendSchema = Yup.object({
    friendName: Yup.string().required("Username required").min(6,"Invalid username").max(20,"Invalid username")
})

module.exports = {friendSchema};