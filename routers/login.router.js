const { register } = require("../Controllers/Register");
const {login}=require('../Controllers/login')
const {verifyotp}=require('../Controllers/verifyotp')
const {uploadFiles}=require('../Controllers/UploadFile')
const {getData}=require('../Controllers/getData')
const {getDataById}=require('../Controllers/getDataById')
const {topBooks}=require("../Controllers/topBooks")
const {latest}=require('../Controllers/latest')
const {categories}=require('../Controllers/categories')
const basePath = "/register"
module.exports = (app) => {
  console.log("inside ");
  app.route(basePath).post(register);
  app.route("/login").post(login);
  app.route('/verifyotp').post(verifyotp)
  app.route('/uploadfile').post(uploadFiles)
  app.route('/getdata').post(getData)
  app.route('/getdatabyid').post(getDataById)
  app.route('/category/:categoryname').post(categories)
  app.route('/latest').get(latest)
  app.route('/trending').get(topBooks)
  // app.route(basePath).post(addProjects)
  // app.route(basePath+projectByid).get(getProjectsById)
  // app.route(basePath+files).get(getFiles)
  // app.route(basePath+uploadpath).post(uploadFiles)
  // app.route(basePath+trains).post(train);
  // app.route(basePath+querys).post(query);
  // app.route(basePath+deletefiles).delete(deleteFile);
  // app.route(basePath+deleteProjects).delete(deleteProject);
  // app.route(basePath+trainingStatuses).get(trainingStatus);
  // app.route(basePath+resetTrainings).post(resetTraining);
  // app.route(basePath+up).put(modifyProject);
  // app.route(chat).post(Chatusers);
};