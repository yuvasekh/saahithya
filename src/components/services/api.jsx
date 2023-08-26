
import { faTemperatureUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const rootUrl="http://localhost:8001/"
export  async function getSuggestions(text)
{
   let  temp=[]
    const content = text.replace(/<[^>]+>/g, '');
  
   await axios.post('http://localhost:3000/text',{ key: content })
  .then((response) => {
    // console.log('Response:', response.data[1][0][1]);
       temp.push(  response.data[1][0][1])
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
  return temp[0]
}
export  async function register(data)
{
  console.log(data,"yuvaback")
  
return await axios.post(`${rootUrl}api/register`,data).then((response)=>
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
export  async function Otpvlidate(data)
{
  console.log(data,"yuvaback")
await axios.post(`${rootUrl}api/verifyotp`,data).then((response)=>
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
  formData.append("SubCategory",values.SubCategory);
  formData.append("fileName",values.fileName);
  formData.append("Price",values.Price);
  formData.append("image",values.BookCover.fileList[0].originFileObj);

//   console.log(formData)
//   for (var key of formData.entries()) {
//     console.log(key[0] + ', ' + key[1]);
// }
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
export  async function categories (categoryname,subcategoryname)
{
return await axios.post(`${rootUrl}api/category/${categoryname,subcategoryname}`).then((response)=>
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