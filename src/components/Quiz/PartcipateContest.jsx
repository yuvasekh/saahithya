import React, { useEffect, useState } from 'react';
import { getContest, fileUploadExisting,participatecontestapi } from '../services/api';
import Form from 'antd/es/form/Form';
import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const participateContest = () => {
  const [FileInfo, setFileInfo] = useState([]);
  const [form] = Form.useForm();
  const notify = (msg) => toast(msg);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getContest();
        console.log(res, "res");
        if (res) {
          console.log(res, "contestInfo");
          setFileInfo(res);
        }
      } catch (error) {
        console.error('Error fetching contest data:', error);
      }
    }
    fetchData();
  }, []);

  const onFinish = async () => {
    try {
      const userValues = await form.validateFields();
      const defaultValues = {
        Id: FileInfo[0].Id,
        ContestName: FileInfo[0].ContestName,
        Description: FileInfo[0].Description,
   
      };
      const allValues = { ...defaultValues, ...userValues };
      console.log('All Form Values:', allValues);

      if (allValues) {
        const res = await participatecontestapi(allValues);
        if (res.hasOwnProperty('response')) {
        
            if(res.response.status==401)
            {
            notify("Token Expired")
              localStorage.clear();
           
            }
            if(res.response.status==400)
            {
           
             notify(" Failed to partcipate")  
             
            }
            if(res.response.status==409)
            {
                
             notify("Entry already exists")  
             
            }
        //    else if(res.response.data.message=="Entry already exists")
        //     {
           
        //      notify(" already  partcipated")  
             
        //     }

           }
           else if(res.hasOwnProperty('code'))
           {
            if(res.code=="ERR_NETWORK")
            {
                alert("falied")
            }

           }
           else
           {
             if(res.status==200)
             { form.resetFields();
              notify("Contest Participated Sucessfully")
             }
           }
    
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
          <ToastContainer />
      {FileInfo.length > 0 ? (
        <Form form={form} onFinish={onFinish} className="my-form">
          <Form.Item label="Contest Name">
            <Input value={FileInfo[0].ContestName} disabled />
          </Form.Item>
          <Form.Item label="Contest Description">
            <Input value={FileInfo[0].Description} disabled />
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

export default participateContest;
