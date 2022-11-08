const mongoose = require('mongoose');
const PirateManager = new mongoose.Schema ({
    name: { type: String,
        required: [
            true,
            "First Name is required",
        ],minlength:[5,"must be at least 5 characters long"],
          maxlength:[16,"Can't be above 16 characters"]
        },
    url: { type: String },
    numberOfChest: { type: Number,
                    required: [
                    true,
                    "Number Of Chest must be at least 0",
                ],minlength:[0,"must be at least 0 characters long"],
                },
    catchPhrase: { type: String, required: [
                    true,
                    "catch phrase is required"
                ], minlength:[8,"must be at least 8 characters long"]
             },
    crewPosition: { type: String, required: [
                true,
                "Position in crew is required"
            ], minlength:[4,"must be at least 4 characters long"]
        },
    hasPegLeg: { type: Boolean, required: [
            true,
            "Must tell if pirate has a peg leg or not"
        ]
     },
     hasEyePatch: { type: Boolean, required: [
        true,
        "Must tell if pirate has a Eye Patch or not"
    ]
 },
 hasHookHand: { type: Boolean, required: [
    true,
    "Must tell if pirate has a hook hand or not"
]
}
}, {timestamps:true});
module.exports.Pirate = mongoose.model('Pirate',PirateManager);