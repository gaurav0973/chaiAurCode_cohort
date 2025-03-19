
const registerUser = async (req, res) =>{
    console.log("User is registered");
    res.status(200).json({
        message : "Kya haal hai"
    })
} 

export {registerUser}