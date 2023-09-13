import React, { useRef, useState } from 'react'
import {
  Button,
  message,
  Upload,
  Modal,
  Drawer,
  Input,
  Form,
  Select,
  DatePicker
} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import {
  UploadOutlined,
  ExperimentOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { fileUpload } from '../components/services/api'
import '../components/Layout/Upload.scss'
import { useNavigate } from 'react-router-dom';
import Checkbox from 'antd/es/checkbox/Checkbox';
const UploadFile = () => {
  const { Option } = Select;
  const navigate=useNavigate()
  const [LanguageSelection,setLanguageSelection]=useState("Telugu")
  // let { projectId } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleImageUpload = async (file) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setImageUrl(URL.createObjectURL(file));
      message.success('Image uploaded successfully');
    }, 2000);
  };

  const [projectData, setProjectData] = useState([]);
  const categoryOptions = [
    "పిల్లలు",
    "ఆధ్యాత్మిక",
    "స్త్రీలు",
    "ప్రేమ",
    "రోమాన్స్",
    "సామాజికం",
    "ఆరోగ్యం",
    "భయం",
    "కామెడీ",
    "జీవితం",
    "శాస్త్రం",
    "సస్పెన్స్",
    "అనుబంధాలు",
    "ఫాంటసీ",
    "వంటిల్లు",
    "అనుబావలు",
    "మండలిక కథలు",
    "ప్రేరణ",
    "పాటలు",
    "మిని కథలు",
    "క్రీడలు",
    "డిటెక్టివ్",
    "క్రైమ్",
    "జీవిత చరిత్ర"
];
const bookCategories = [
  "Adventure",
  "Banned Books",
  "Business & Money",
  "Classics",
  "Philosophy & Inspiration",
  "Drama",
  "Fiction And Literature",
  "Gay/Lesbian/LGBTQ+",
  "History",
  "Poetry",
  "Science Fiction",
  "War",
  "Travel",
  "Psychology",
  "Periodical & Mythology",
  "Biography",
  "Cooking",
  "Games/Sports",
  "Music",
  "Mystery/Detective",
  "Thriller & Suspense",
  "Humor/Comedy",
  "Children",
  "Devotional",
  "Love",
  "Romance",
  "Health",
  "Horror",
  "Fantasy",
  "Epic/Short Stories",
  "Crime"
];

  const subcategoryOptions = ['Novel', 'Books', 'Crime',"Genra"];
  const categoryOptions1 = ['Books', 'Audio', 'Reels'];
  const categoryOptions2 = ['Telugu', 'English'];
  const onFinish = async (values) => {
    console.log('Form values:', values);
    var res=await fileUpload(values)
    console.log(res.status,"test")
    if(res.status==200)
    {
      navigate('/home')
    }
else{
  alert("Uplaod Failed")
}

  };

const handleChange=((e)=>
{
  console.log(e,"event")
  setLanguageSelection(e)
})
  return (

    <>
    <div className='upload-con'>
      <h1 style={{  textAlign: 'center',   color: 'tomato' }}>Publish A Book</h1>
     
      <div className='form-container' >
        <Form onFinish={onFinish} className="my-form" >
          <Form.Item
            label="Author Name"
            // style={{ fontSize:"20px" }}
            name="authorName"
            rules={[
              {
                required: true,
                message: 'Please enter the author name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Book Type"
            name="BookType"
            rules={[
              {
                required: true,
                message: 'Please enter the Book Type',
              },
            ]}
          >
            <Select placeholder="Select a category">
              {categoryOptions1.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Book Language"
            name="Book Language"
            rules={[
              {
                required: true,
                message: 'Please enter the Book Language',
              },
            ]}
           
          >
            <Select placeholder="Select a Book Language"  onChange={handleChange}>
              {categoryOptions2.map((category) => (
                <Option key={category} value={category} >
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
        label="Category Name"
        name="categoryName"
        rules={[
          {
            required: true,
            message: 'Please select at least one category',
          },
        ]}
      >
        <Select
          mode="multiple"
          placeholder="Select categories"
          style={{ width: '100%' }}
        >
          {LanguageSelection === 'Telugu'
            ? categoryOptions.map((category) => (
                <Option key={category} value={category}>
                  <Checkbox>{category}</Checkbox>
                </Option>
              ))
            : bookCategories.map((category) => (
                <Option key={category} value={category}>
                  <Checkbox>{category}</Checkbox>
                </Option>
              ))}
        </Select>
      </Form.Item>

          <Form.Item
            label="SubCategory Name"
            name="SubCategory"
            rules={[
              {
                required: true,
                message: 'Please enter the subcategory name',
              },
            ]}
          >
            <Select placeholder="Select a subcategory">
              {subcategoryOptions.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Book Title"
            name="BookTitle"
            rules={[
              {
                required: true,
                message: 'Please enter the Book Title',
              },
            ]}
          >
            <Input />
          </Form.Item>
      
          <Form.Item
        name="description"
        label="Book Description"
        rules={[
          {
            required: true,
            message: 'Please enter your message',
          },
        ]}
      >
        <Input.TextArea rows={4} placeholder="Enter your message here" />
      </Form.Item>

     

          <Form.Item>

            <Form.Item name="pdf" label="PDF File">
              <Upload.Dragger name="pdf" beforeUpload={() => false}>
                <p className="ant-upload-drag-icon" style={{ marginTop: '-18px' }}>
                  <UploadOutlined />
                </p>
              </Upload.Dragger>

            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Upload Book Cover Page"
              name="BookCover"
              rules={[
                {
                  required: true,
                  message: 'Upload Book Cover Page',
                },
              ]}
            >

              <Upload
                name="avatar"
                listType="picture-card"
                showUploadList={false}
                beforeUpload={(file) => {
                  // Ensure only image files are uploaded
                  const isImage = file.type.startsWith('image/');
                  if (!isImage) {
                    message.error('You can only upload image files');
                  }
                  return isImage;
                }}
                customRequest={({ file }) => handleImageUpload(file)}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="Uploaded" style={{ width: '50%' }} />
                ) : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div>Upload</div>
                  </div>
                )}
              </Upload>

            </Form.Item>
            <Form.Item
        label="Price"
        name="Price"
        rules={[
          {
            required: true,
            message: 'Please enter an integer value.',
          },
        
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
    label="Published Year"
    name="Published Year"
    rules={[
        {
            required: true,
            message: 'Please enter the Published Year',
        },
    ]}
>
    <DatePicker
        style={{ width: '100%' }}
        format="YYYY-MM-DD" // You can customize the date format
         // Add the onChange event handler here
    />
</Form.Item>
            <div style={{ display: 'flex', gap: '12px' }}>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        
        </Form>
      
      </div>
    </div>
    </>
  )
}
export default UploadFile
