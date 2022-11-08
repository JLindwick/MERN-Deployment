const mongoose = require('mongoose');
const UserManager = new mongoose.Schema ({
    firstName: { type: String,
        required: [
            true,
            "First Name is required",
        ],minlength:[5,"must be at least 5 characters long"],
          maxlength:[16,"Can't be above 16 characters"]
        },
        lastName: { type: String,
            required: [
                true,
                "Last Name is required",
            ],minlength:[5,"must be at least 5 characters long"],
              maxlength:[16,"Can't be above 16 characters"]
            },
            email: { type: String,
                     unique: true ,
                required: [
                    true,
                    
                    "Email is required",
                ],minlength:[10,"must be at least 10 characters long"],
                  maxlength:[30,"Can't be above 30 characters"]
                },
            password: { type: String, required: [
                true,
                "Password is required"
            ], minlength:[8,"must be at least 8 characters long"]
         }
}, {timestamps:true});
module.exports.User = mongoose.model('User',UserManager);