const express = require("express");
const authMiddleware = require("../middlewares/auth");
const firebase = require("../config/firebase.config");
const router = express.Router();
const upload = require("../config/multer.config");
const fileModel = require("../models/files.model");


router.get('/',(req,res)=>{
  res.render('index')
})

router.get("/home", authMiddleware, async (req, res) => {
  const userFiles = await fileModel.find({
    user: req.user.userId,
  });



  res.render("home",{
    files:userFiles
  });
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    const newFile = await fileModel.create({
      path: req.file.path,
      originalname: req.file.originalname,
      user: req.user.userId,
    });
    // res.json(newFile);
    res.redirect('/home')
  }
);

router.get('/delete/:path',authMiddleware,async(req,res)=>{
  const loggedInUserId=req.user.userId;
  const path=req.params.path;
  await fileModel.findOneAndDelete({user:loggedInUserId,
    path:path
  })

  res.json('File Deleted successfully')
})

router.get("/download/:path",authMiddleware,async(req,res)=>{

    const loggedInUserId=req.user.userId;
    const path=req.params.path
    const file = await fileModel.findOne({user:loggedInUserId,
        path:path
    });

    if(!file){
        res.status(401).json({
            message:"Unauthorized"
        })
    }

    const signedUrl=await firebase.storage().bucket().file(path).getSignedUrl({
        action:'read',
        expires:Date.now()+ 60 *1000
    })


    res.redirect(signedUrl[0])
})
module.exports = router;
