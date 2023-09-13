const { register } = require("../Controllers/Register");
const {login}=require('../Controllers/login')
const {verifyotp}=require('../Controllers/verifyotp')
const {uploadFiles}=require('../Controllers/UploadFile')
const {getData}=require('../Controllers/getData')
const {getDataById}=require('../Controllers/getDataById')
const {topBooks}=require("../Controllers/topBooks")
const {latest}=require('../Controllers/latest')
const {categories}=require('../Controllers/categories')
const {TextEditor}=require('../Controllers/TextEditor')
const {addtocarts}=require('../Controllers/addtocart')
const {updatecart}=require('../Controllers/updatecart')
const {getCart}=require('../Controllers/getCart')
const {createpole,createquiz,getpole,participatepole,getquiz,participateQuiz,getquizresults}=require('../Controllers/contest');
const { getallusers } = require("../Controllers/getallusers");
const basePath = "/register"
module.exports = (app) => {
  console.log("inside ");
  app.route(basePath).post(register);
  app.route("/login").post(login);
  app.route('/verifyotp').post(verifyotp)
  app.route('/uploadfile').post(uploadFiles)
  app.route('/getdata').post(getData)
  app.route('/getdatabyid').post(getDataById)
  app.route('/category').post(categories)
  app.route('/latest').get(latest)
  app.route('/trending').get(topBooks)
  app.route('/textupload').post(TextEditor)
  app.route('/addtocart').post(addtocarts)
  app.route('/getCart').post(getCart)
  app.route('/updatecart').put(updatecart)
  app.route('/createpole').post(createpole)
  app.route('/poller').post(participatepole)
  app.route('/createquiz').post(createquiz)
  app.route('/getpole').get(getpole)
  app.route('/getquiz').get(getquiz)
  app.route('/getallusers').get(getallusers)
  app.route('/getquizresults').get(getquizresults)
  app.route('/participateQuiz').post(participateQuiz)
};