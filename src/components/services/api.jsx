import { faTemperatureUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import jwtDecode from "jwt-decode";

// const rootUrl="https://saahithya-api.azurewebsites.net/"
const rootUrl = "http://localhost:8001/";
var token = localStorage.getItem("token");
// console.log(token,"token")
async function tokencheck() {
  let info
  var token = localStorage.getItem("token");
  if (token != null) {
     info = jwtDecode(token);
     
    console.log(info, "info")
  }
  return token
}

export async function getSuggestions(text) {
  console.log(text);
  let temp = [];
  await axios
    .post(`${rootUrl}api/textupload`, { content: text })
    .then((response) => {
      temp.push(response.data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  return temp[0];
}
export async function register(values) {
  console.log(values, "yuvaback");
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("confirmPassword", values.confirmPassword);
  formData.append("password", values.password);
  formData.append("mobile", values.mobile);
  formData.append("gender", values.gender);
  formData.append("email", values.email);
  formData.append("address", values.address);
  formData.append("dob", values.dob);
  formData.append("inputFile", values.Profile.fileList[0].originFileObj);
  return await axios
    .post(`${rootUrl}api/register`, formData)
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function login(data) {
  console.log(data, "yuvaback");

  return await axios
    .post(`${rootUrl}api/login`, data)
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function Otpvlidate(values) {
  const formData = new FormData();
  formData.append("name", values.data.name);
  formData.append("confirmPassword", values.data.confirmPassword);
  formData.append("password", values.data.password);
  formData.append("mobile", values.data.mobile);
  formData.append("gender", values.data.gender);
  formData.append("email", values.data.email);
  formData.append("address", values.data.address);
  formData.append("dob", values.data.dob);
  formData.append("otp", values.otp);
  formData.append("inputFile", values.data.Profile.fileList[0].originFileObj);

  console.log(values, "yuvaback");
  await axios
    .post(`${rootUrl}api/verifyotp`, formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function fileUpload(values) {
  const formData = new FormData();
  console.log(values, "apii");
  formData.append("inputFile", values.pdf.fileList[0].originFileObj);
  formData.append("authorName", values.authorName);
  formData.append("categoryName", values.categoryName);
  formData.append("BookTitle", values.BookTitle);
  formData.append("Book Language", values["Book Language"]);
  formData.append("BookType", values.BookType);
  formData.append("SubCategory", values.SubCategory);
  formData.append("fileName", values.fileName);
  formData.append("Price", values.Price);
  formData.append("description", values.description);
  formData.append("AuthorCategory", values.AuthorCategory);
  formData.append("Book Excerpt", values["Book Excerpt"]);
  formData.append("Published Year", values["Published Year"]);
  formData.append("image", values.BookCover.fileList[0].originFileObj);
  return await axios.post(`${rootUrl}api/uploadfile`, formData);
}
export async function getData(data) {
  console.log(data, "yuvaback");
  return await axios
    .post(`${rootUrl}api/getData`, data)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getDataById(data) {
  const formData = new FormData();
  formData.append("FileId", data);
  console.log(data, "yuvaback");
  return await axios
    .post(`${rootUrl}api/getdatabyid`, formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function categories(requesteddata) {
  return await axios
    .post(`${rootUrl}api/category`, requesteddata)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function latest() {
  // console.log(data,"yuvaback")
  return await axios
    .get(`${rootUrl}api/latest`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function trending() {
  // console.log(data,"yuvaback")
  return await axios
    .get(`${rootUrl}api/trending`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function cartLog() {
  const formData = new FormData();
  formData.append("FileId");
  return await axios
    .post(`${rootUrl}api/getCart`, formData)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

export async function addToCart(data) {
  try {
    console.log(data, "yuvaback000");
    const formData = new FormData();
    formData.append("FileId", data);
    const response = await axios.post(`${rootUrl}api/addtocart`, formData);
    console.log(response.data); // Print the response data
    return response.data; // Return the response data to handle it outside the function if needed
  } catch (error) {
    console.error("Error:", error.message);
    // Handle the error further or throw it to be caught by the calling function
    throw error;
  }
}


export async function createpole(data) {
    var token = localStorage.getItem("token");;
    console.log(token,"check")
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  return await axios
    .post(`${rootUrl}api/createpole`, data, { headers }) 
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

export async function getpole() {
  tokencheck();
  return await axios
    .get(`${rootUrl}api/getpole`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function poller(data) {
  var token = localStorage.getItem("token");
const headers = {
  'Authorization':token,
  'Content-Type': 'application/json', 
};
  return await axios
  .post(`${rootUrl}api/poller`, data, { headers }) 
  .then((res) => {
    console.log(res,"checkdb")
    return res;
  })
  .catch((error) => {
    console.log(error,"chekerror")
    return error.response;
  });
}

export async function createquiz(data) {
  var token = localStorage.getItem("token");;
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
    console.log(data, "api");
    const dataToSend = {
      data: data,
      Email: "syuva893@gmail.com",
    };
    return await axios
    .post(`${rootUrl}api/createquiz`, dataToSend, { headers }) 
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}
export async function getquiz() {
  return await axios
    .get(`${rootUrl}api/getquiz`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function participateQuiz(data) {
  var token = localStorage.getItem("token");
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  const dataToSend = {
    data: data,
  };
  return await axios
    .post(`${rootUrl}api/participateQuiz`, dataToSend,{headers})
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return error
    });
}
export async function getallusers() {
  return await axios
    .get(`${rootUrl}api/getallusers`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function authorCategoryImages(data) {
  console.log(data, "requestedCategory");
  return await axios
    .post(`${rootUrl}api/authorcategoryimages/${data}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function authorCategory(data) {
  console.log(data, "authorcategoryapi");
  return await axios
    .post(`${rootUrl}api/authorcategory`, data)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getTags(id) {
  console.log(id, "Idfromdesc");
  return await axios
    .get(`${rootUrl}api/gettags/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getRole(id) {
  console.log(id, "Idfromdesc");
  return await axios
    .post(`${rootUrl}api/gettags/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getFileById(id) {
  console.log(id, "Idfromdesc");
  return await axios
    .get(`${rootUrl}api/file/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function addcomments(id, comment) {
  let commentvalue = {
    comment: comment,
  };
  console.log(id, "Idfromdesc");
  tokencheck();
  return await axios
    .post(`${rootUrl}api/addcomment/${id}`, commentvalue)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getcomments(id) {
  console.log(id, "Idfromdesc");
  tokencheck();
  return await axios
    .get(`${rootUrl}api/getcomments/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function addreport(id, reason) {
  let commentvalue = {
    comment: "Testing",
  };
  console.log(id, "Idfromdesc");
  tokencheck();
  return await axios
    .post(`${rootUrl}api/getreports/${id}`, commentvalue)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getreports(id) {
  console.log(id, "Idfromdesc");
  tokencheck();
  return await axios
    .get(`${rootUrl}api/getreports/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

export async function deleteFile(id) {
  console.log(id, "Idfromdesc");
  tokencheck();
  return await axios
    .delete(`${rootUrl}api/deletefile/${id}`)
    .then((response) => {
      console.log(response.data, "backenddata");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function gettopcomments() {
  // tokencheck()
  return await axios
    .get(`${rootUrl}api/gettopcomments`)
    .then((response) => {
      console.log(response.data, "comentedbooks");
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function getquizresults() {
  
  return await axios
    .get(`${rootUrl}api/getquizresult`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function poleparticipators() {

  return await axios
    .get(`${rootUrl}api/getpoleresult`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
export async function giverating(data) {
  console.log(data)
  var token = localStorage.getItem("token");
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  return await axios
    .post(`${rootUrl}api/rating`,data,{headers})
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return error
    });
}
export async function giveLikes(data) {
  console.log(data)
  var token = localStorage.getItem("token");
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  return await axios
    .post(`${rootUrl}api/likes`,data,{headers})
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return error
    });
}
export async function deleteuser(data) {
  console.log(data,"delete")
  var token = localStorage.getItem("token");
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  return await axios
    .delete(`${rootUrl}api/deleteuser/${data}`,{headers})
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
      return error
    });
}
export async function getallfiles(data) {
  console.log(data)
  var token = localStorage.getItem("token");
  const headers = {
    'Authorization':token,
    'Content-Type': 'application/json', 
  };
  return await axios
    .get(`${rootUrl}api/getallfiles/${data}`,{headers})
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      return error
    });
}