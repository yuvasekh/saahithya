import React, { useRef, useState } from 'react'
import {
  Button,
  message,
  Upload,
  Modal,
  Drawer,
  Input,
  Form,
  Select
} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import {
  UploadOutlined,
  ExperimentOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { fileUpload } from '../components/services/api'
import '../components/Layout/Upload.scss'
const UploadFile = () => {
  const { Option } = Select;
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
  const categoryOptions = ['Horror', 'Comedy', 'Crime',"Genra","Life","Prema","Child","Women","samajikam","Health","athyadmika","Suspence","Science","Anubandhalu","LGBT","Mandalika kathalu","Prerana","Patalu","Mini kathalu","Sports","Kotha rachanalu","Blog"];
  const subcategoryOptions = ['Novel', 'Books', 'Crime',"Genra"];
  const onFinish = async (values) => {
    console.log('Form values:', values);

    await fileUpload(values)

    // You can perform further actions with the form values here
  };




  return (
    <div>
      {/* <Modal
        title={<div className="text-center">Upload</div>}
        footer={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
      >
        <div className="p-4">
          <Dragger
            {...propsData}
            onChange={(info) => fileChange(info)}
            customRequest={dummyRequest}
            itemRender={(origin, locFile) => {
              return (
                <div>
                  {isUploaded[locFile.uid] == "success" ? (
                    <div className=" gap-2">
                      {" "}
                      <CheckCircleFilled className="text-green-400 mr-1" />
                      {locFile.name}
                    </div>
                  ) : isUploaded[locFile.uid] == "failed" ? (
                    <div className=" gap-2">
                      {" "}
                      <CloseCircleOutlined className="text-red-400 mr-1" />
                      {locFile.name}
                    </div>
                  ) : (
                    <div className=" gap-2 mr-1">
                      <LoadingOutlined /> {locFile.name}
                    </div>
                  )}
                </div>
              );
            }}
          >
            <p className="ant-upload-drag-icon">
              <UploadOutlined style={{ fontSize: "25" }}></UploadOutlined>
            </p>
            <p className="ant-upload-text" style={{ fontWeight: "600" }}>
              Click or drag file to this area to upload
            </p>
          </Dragger>
        </div>
      </Modal>  */}
      <h1 style={{ display: 'flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center', color: 'tomato' }}>Publish A Book</h1>
     
      <div className='form-container'>

        <Form onFinish={onFinish} className="my-form">
          <Form.Item
            label="Author Name"
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
            label="Category Name"
            name="categoryName"
            rules={[
              {
                required: true,
                message: 'Please enter the category name',
              },
            ]}
          >
            <Select placeholder="Select a category">
              {categoryOptions.map((category) => (
                <Option key={category} value={category}>
                  {category}
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

            <div style={{ display: 'flex', gap: '12px' }}>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>








        </Form>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
export default UploadFile
