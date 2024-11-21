import mooongos from "mooongos";


const userSchema = new mooongos.Schema({

    username:{ 
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    
    email:{
        type: String,
        required: [true, "email is required"],
 
    },
      
    isVerified: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken:  string,
    forgotPasswordTokenExpiry: Date,
    verifyToken: string,
    verifyTokenExpiry: Date 
 

   
});