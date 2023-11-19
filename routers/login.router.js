const { register } = require("../Controllers/Register");
const {login}=require('../Controllers/login')
const {verifyotp}=require('../Controllers/verifyotp')
const {uploadFiles,deleteFile,uploadNewsFiles,getNews,uploadExistingFiles}=require('../Controllers/UploadFile')
const {getData}=require('../Controllers/getData')
// const {getDataById}=require('../Controllers/getDataById')
const {forgotpassword,resetpassword}=require('../Controllers/forgetPassword')
const {topBooks}=require("../Controllers/topBooks")
const {latest}=require('../Controllers/latest')
const {poleparticipators,getquizresults} =require('../Controllers/contestResults')
const {categories}=require('../Controllers/categories')
const {authorCategory,authorCategoryImages}=require('../Controllers/authorCategory')
const {TextEditor}=require('../Controllers/TextEditor')
const {addtocarts}=require('../Controllers/addtocart')
const {updatecart}=require('../Controllers/updatecart')
const {getCart}=require('../Controllers/getCart')
const {tags}=require('../Controllers/tags')
const {createpole,createquiz,getpole,participatepole,getquiz,participateQuiz,createcontest, getcontest, participatecontest}=require('../Controllers/contest');
const { getallusers,getusersinfo,deleteuser } = require("../Controllers/getallusers");
const {getRole}=require('../Controllers/getRole')
const {getFileById,getAllFiles,getFilesByEmail}=require('../Controllers/getFileById')
const {rating,likes,updateviews}=require('../Controllers/Likes')
const {comments,getcomments,getreports,reports,getTopComments}=require('../Controllers/comments')
const basePath = "/register"
module.exports = (app) => {
  console.log("inside ");
  app.route(basePath).post(register);
  app.route("/login").post(login);
  app.route('/verifyotp').post(verifyotp)
  app.route('/uploadfile').post(uploadFiles)
  app.route('/uploadexistingfile').post(uploadExistingFiles)
  app.route('/getdata').post(getData)
  // app.route('/getdatabyid').post(getDataById)
  app.route('/category').post(categories)
  app.route('/createcontest').post(createcontest)
  app.route('/getcontest').get(getcontest)
  app.route('/participatecontest').post(participatecontest)
  app.route('/latest').get(latest)
  app.route('/trending').get(topBooks)
  app.route('/textupload').post(TextEditor)
  app.route('/addtocart').post(addtocarts)
  app.route('/userinfo').get(getusersinfo)
  app.route('/getCart').post(getCart)
  app.route('/updatecart').put(updatecart)
  app.route('/createpole').post(createpole)
  app.route('/poller').post(participatepole)
  app.route('/createquiz').post(createquiz)
  app.route('/getpole').get(getpole)
  app.route('/getquiz').get(getquiz)
  app.route('/getpoleresult').get(getquizresults)
  app.route('/getquizresult').get(poleparticipators)
  app.route('/getallusers').get(getallusers)
  app.route('/participateQuiz').post(participateQuiz)
  app.route('/forgotpassword').put(forgotpassword)
  app.route('/resetpassword').put(resetpassword)
  app.route('/authorcategory').post(authorCategory)
  app.route('/authorcategoryimages/:name').post(authorCategoryImages)
  app.route('/gettags/:id').get(tags)
  app.route('/getrole').post(getRole)
  app.route('/file/:id').get(getFileById)
  app.route('/deletefile/:id').delete(deleteFile)
  app.route('/deleteuser/:email').delete(deleteuser)
  app.route('/addcomment/:id').post(comments)
  app.route('/getcomments/:id').get(getcomments)
  app.route('/getreports/:id').post(reports)
  app.route('/getreports/:id').get(getreports)
  app.route('/getallfiles/:pagecount').get(getAllFiles)
  app.route('/getuserfiles').get(getFilesByEmail)
  app.route('/rating').post(rating)
  app.route('/likes').post(likes)
  app.route('/views').post(updateviews)
  app.route('/uploadnews').post(uploadNewsFiles)
  app.route('/getnews').get(getNews)
  app.route('/gettopcomments').get(getTopComments)
};