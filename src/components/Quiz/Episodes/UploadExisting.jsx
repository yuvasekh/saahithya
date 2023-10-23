import React, { useEffect, useState } from 'react';
import { getFilesByEmail, getFileById,fileUploadExisting } from '../../services/api';
import Form from 'antd/es/form/Form';
import { Select, Input,Upload,Button} from 'antd';
const { Option } = Select;
import {
    UploadOutlined,
    ExperimentOutlined,
    LoadingOutlined,
  } from "@ant-design/icons";

const UploadExisting = () => {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [FileInfo, setFileInfo] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    async function fetchData() {
      var res = await getFilesByEmail();
      console.log(res,"res")
      if(res.data)
      console.log(res, "backusers");
      setCategoryOptions(res);
    }
    fetchData();
  }, []);


  const onFinish = async () => {
    try {
      const userValues = await form.validateFields();
  
      // Access the default values from FileInfo
      const defaultValues = {
        FileId: FileInfo?.[0]?.FileId,
        BookLanguage: FileInfo?.[0]?.BookLanguage,
        CategoryName: FileInfo?.[0]?.CategoryName,
        SubCategory: FileInfo?.[0]?.SubCategory,
        Type: FileInfo?.[0]?.Type,
      };
  
      console.log(userValues, "user");
  
      // Merge the default and user-entered values
      const allValues = { ...defaultValues, ...userValues };
  
      console.log('All Form Values:', allValues);
  
      if (allValues) {
        const res = await fileUploadExisting(allValues);
        // Do something with the result 'res' if needed
      }
    } catch (error) {
      // Handle any validation errors or other exceptions here
      console.error('Error:', error);
    }
  };
  
  

  const handleChange = async (value) => {
    console.log(value,"value"); // This will be the selected FileName

    // Find the selected item by FileName
    const selectedItem = categoryOptions.find((item) => item.FileName === value);
console.log(selectedItem,"value")
    if (selectedItem) {
      console.log(selectedItem.FileId); // This is the selected FileId
      // You can use the selectedItem.FileId for further processing
      const fileId = selectedItem.FileId;
      var fileData = await getFileById(fileId);
      console.log(fileData,"value")
      setFileInfo(fileData)
      console.log(fileData); // Use fileData as needed
    }
  };
  useEffect(()=>
  {

  },[FileInfo,categoryOptions])

  return (
    <div>
      <Form.Item
        label="Select a Book Name"
        name="bookName"
        rules={[
          {
            required: true,
            message: 'Please select a Book Name',
          },
        ]}
      >
        <Select placeholder="Select a Book Name" onChange={handleChange}>
          {categoryOptions.map((category) => (
            <Option key={category.FileId} value={category.FileName}>
              {category.FileName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {FileInfo.length>0 ? (
        <Form
        form={form}
        onFinish={onFinish}
        className="my-form"
      >
        <Form.Item label="File Id" >
          <Input value={FileInfo?.[0]?.FileId} disabled />
        </Form.Item>
        <Form.Item label="Book Language">
          <Input value={FileInfo?.[0]?.BookLanguage} disabled />
        </Form.Item>
        <Form.Item label="Category Name"  >
          <Input value={FileInfo?.[0]?.CategoryName} disabled />
        </Form.Item>
        <Form.Item label="SubCategory" >
          <Input value={FileInfo?.[0]?.SubCategory} disabled />
        </Form.Item>
        <Form.Item label="Type" >
          <Input value={FileInfo?.[0]?.Type} disabled />
        </Form.Item>
        <Form.Item label="Episode Number" name="Episode Number">
          <Input name="episodeNumber" />
        </Form.Item>
        <Form.Item
        name="Book Excerpt"
        label="Book Excerpt"
        rules={[
          {
            required: true,
            message: 'Please Enter Book Excerpt',
          },
        ]}
      >
        <Input.TextArea rows={10} placeholder="Enter your message here" />
      </Form.Item>
      <Form.Item name="pdf" label="PDF File">
  <Upload.Dragger
    name="pdf"
    maxCount={1}
  >
    <p className="ant-upload-drag-icon" style={{ marginTop: '-18px' }}>
      <UploadOutlined />
    </p>
  </Upload.Dragger>
</Form.Item>
        <Button type="primary" htmlType="submit">
            Submit
          </Button>
      </Form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UploadExisting;
