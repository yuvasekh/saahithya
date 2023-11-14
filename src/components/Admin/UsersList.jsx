import React, { useEffect, useState } from 'react';
import { Table, Input,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getallusers,deleteuser } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const UsersList = (props) => {
  const [reports, setReports] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const notify = (msg) => toast(msg);
  const navigate = useNavigate();
  function readPage(item) {
    console.log(item.FileId, "message");
    let file = item.FileId;
    navigate("/read", { state: { myProp: file } });
  }
  async function deleteuserfromdb(item) {
    console.log(item);
    var res=await deleteuser(item);
    if (res.hasOwnProperty('response')) {
        if(res.response.status==401)
        {
        notify("Token Expired")
          localStorage.clear();
         navigate('/login')
        }
        if(res.response.status==400)
        {
         localStorage.clear();
         notify(" Token Expired Login Again")  
         navigate('/login')
        }
       }
       else
       {
         if(res.status==200)
         {
          notify("Deleted Sucessfully")
         }
       }
  }
  useEffect(() => {
    async function fetchData() {
      try {
        let res;
          res = await getallusers();
          console.log(res,"users")
        if (res && res.length > 0) {
          const head = Object.keys(res[0]);
          setHeaders(head);
          setReports(res);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [props.value]);

  const filterData = () => {
    if (searchValue === '') {
      return reports;
    } else {
      return reports.filter((item) =>
        item.Email.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  };

  const columns = headers.map((header) => ({
    title: header,
    dataIndex: header,
    key: header,
  }));
  columns.push(
    {
      title: 'Delete the user',
      key: 'delete',
      render: (text, record) => (
        <Button onClick={() => deleteuserfromdb(record.Email)}>Delete</Button>
      ),
    }
  );

  return (
    <div className="listdata">
          <ToastContainer />
      <Input
        type="text"
        id="emailSearch"
        placeholder="Search by Email"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Table
        dataSource={filterData()}
        columns={columns}
        pagination={{ pageSize: 10 }}
        locale={{
          emptyText: 'No data available',
        }}
      />
    </div>
  );
};

export default UsersList;
