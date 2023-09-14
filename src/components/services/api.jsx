
import { faTemperatureUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const rootUrl="http://localhost:8001/"
export  async function getSuggestions(text)
{
   console.log(text)
  let temp=[]
    await axios.post(`${rootUrl}api/textupload`,{content: text})
  .then((response) => {
   
       temp.push(  response.data)
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
  return temp[0]
}
export  async function register(values)
{
  console.log(values,"yuvaback")
  const formData = new FormData();
  formData.append("name",values.name);
  formData.append("confirmPassword",values.confirmPassword);
  formData.append("password",values.password);
  formData.append("mobile",values.mobile);
  formData.append("gender",values.gender);
  formData.append("email",values.email);
  formData.append("address",values.address);
  formData.append("dob",values.dob);
  formData.append("inputFile",values.Profile.fileList[0].originFileObj);
return await axios.post(`${rootUrl}api/register`,formData).then((response)=>
{
// console.log(response)
return response;
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function login(data)
{
  console.log(data,"yuvaback")
  
return await axios.post(`${rootUrl}api/login`,data).then((response)=>
{
// console.log(response)   
return response;
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function Otpvlidate(values)
{
  const formData = new FormData();
  formData.append("name",values.data.name);
  formData.append("confirmPassword",values.data.confirmPassword);
  formData.append("password",values.data.password);
  formData.append("mobile",values.data.mobile);
  formData.append("gender",values.data.gender);
  formData.append("email",values.data.email);
  formData.append("address",values.data.address);
  formData.append("dob",values.data.dob);
  formData.append("otp",values.otp);
  formData.append("inputFile",values.data.Profile.fileList[0].originFileObj);
  
  console.log(values,"yuvaback")
await axios.post(`${rootUrl}api/verifyotp`,formData).then((response)=>
{
console.log(response)
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export async function fileUpload(values) {
  const formData = new FormData();
  console.log(values,"apii")
  formData.append("inputFile",values.pdf.fileList[0].originFileObj);
  formData.append("authorName",values.authorName);
  formData.append("categoryName",values.categoryName);
  formData.append("BookTitle",values.BookTitle);
  formData.append("Book Language",values['Book Language']);
  formData.append("BookType",values.BookType);
  formData.append("SubCategory",values.SubCategory);
  formData.append("fileName",values.fileName);
  formData.append("Price",values.Price);
  formData.append("description",values.description);
  formData.append("AuthorCategory",values.AuthorCategory);
  formData.append("Published Year",values['Published Year']);
  formData.append("image",values.BookCover.fileList[0].originFileObj);
  return await axios.post(
    `${rootUrl}api/uploadfile`,
    formData
  );
}
export  async function getData(data)
{
  console.log(data,"yuvaback")
return await axios.post(`${rootUrl}api/getData`,data).then((response)=>
{
console.log(response.data)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function getDataById(data)
{
  const formData = new FormData();
  formData.append("FileId",data);
  console.log(data,"yuvaback")
return await axios.post(`${rootUrl}api/getdatabyid`,formData).then((response)=>
{
console.log(response)
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function categories (requesteddata)
{
return await axios.post(`${rootUrl}api/category`,requesteddata).then((response)=>
{
console.log(response)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function latest ()
{
  // console.log(data,"yuvaback")
return await axios.get(`${rootUrl}api/latest`).then((response)=>
{
console.log(response)
return response.data;
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function trending ()
{
  // console.log(data,"yuvaback")
return await axios.get(`${rootUrl}api/trending`).then((response)=>
{
console.log(response)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export  async function cartLog()
{
  const formData = new FormData();
  formData.append("FileId","syuva893@gmail.com");
return await axios.post(`${rootUrl}api/getCart`,formData    ).then((response)=>
{
console.log(response.data)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
// export  async function addtocart(data)
// {
//   console.log(data,"yuvabackoo")
  
//  await axios.post(`${rootUrl}api/addtocart`,data).then((response)=>
// {
//     console.log(response)
// return response;
// }).catch((error)=>
// {
//   console.error('Error:', error.message);
// })
// }
export async function addToCart(data) {
  try {
    console.log(data, "yuvaback000");
    const formData = new FormData();
    formData.append("FileId",data);
    const response = await axios.post(`${rootUrl}api/addtocart`, formData);
    console.log(response.data); // Print the response data
    return response.data; // Return the response data to handle it outside the function if needed
  } catch (error) {
    console.error('Error:', error.message);
    // Handle the error further or throw it to be caught by the calling function
    throw error;
  }
}
export async function createpole(data) {

    console.log(data, "yuvaback000");
    const formData = new FormData();
    formData.append("Poledata",data);
   return await axios.post(`${rootUrl}api/createpole`, data).then((res)=>
   {
    return res.data;
   }).catch((error)=>
   {
return error
   })
 
}
export  async function getpole()
{
return await axios.get(`${rootUrl}api/getpole`).then((response)=>
{
console.log(response.data)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export async function poller(data) {
 
  
    const dataToSend = {
      data: data,
      Email: "syuva893@gmail.com"
     
    };
    return await axios.post(`${rootUrl}api/poller`, dataToSend).then((response)=>
    {
      console.log(response.data)
      return response.data
    }).catch((error)=>
    {

      console.error('Error:', error.message);
    })

  
}

export async function createquiz(data) {
  try {

 console.log(data,"api")
    const dataToSend = {
      data: data,
      Email: 'syuva893@gmail.com'
      // Add more key-value pairs as needed
    };
    const response = await axios.post(`${rootUrl}api/createquiz`, dataToSend);
    console.log(response.data); // Print the response data
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    // Handle the error further or throw it to be caught by the calling function
    throw error;
  }
}
export  async function getquiz()
{
return await axios.get(`${rootUrl}api/getquiz`).then((response)=>
{
console.log(response.data)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}
export async function participateQuiz(data) {
 
  
  const dataToSend = {
    data: data,
    Email: "syuva893@gmail.com"
   
  };
  return await axios.post(`${rootUrl}api/participateQuiz`, dataToSend).then((response)=>
  {
    console.log(response.data)
    return response.data
  }).catch((error)=>
  {

    console.error('Error:', error.message);
  })


}
export  async function getallusers ()
{

return await axios.get(`${rootUrl}api/getallusers`).then((response)=>
{
console.log(response)
return response.data
}).catch((error)=>
{
  console.error('Error:', error.message);
})
}