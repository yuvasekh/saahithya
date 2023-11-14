import React, { useEffect, useState } from 'react';
import { getreports, deleteFile } from '../services/api';
import { Button, Table, Input } from 'antd'; // Import Table and Input components
import { useNavigate } from 'react-router-dom';
 // Import your custom CSS file

 const Reports = () => {
  const [reports, setReports] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const navigate = useNavigate();
  const { Search } = Input;

  useEffect(() => {
    async function fetchReports() {
      const res = await getreports();
      console.log(res, "val");
      let head = Object.keys(res[0]);
      head.push("Review the Book");
      head.push("Delete");
      setHeaders(head);
      setReports(res);
      console.log(res, "names");
    }
    fetchReports();
  }, []);

  function readPage(item) {
    console.log(item.FileId, "message");
    let file = item.FileId;
    navigate("/read", { state: { myProp: file } });
  }

  async function deletebook(item) {
    console.log(item);
    var res=await deleteFile(item);
  }

  const columns = headers.map((header) => ({
    title: header,
    dataIndex: header,
    key: header,
  }));

  columns.push(
    {
      title: 'Review the Book',
      key: 'review',
      render: (text, record) => (
        <Button onClick={() => readPage(record)}>Read</Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (text, record) => (
        <Button onClick={() => deletebook(record.FileId)}>Delete</Button>
      ),
    }
  );

  return (
    <div className='listdata'>
      <Search
        placeholder='Search by Name or Email' // Update placeholder
        onSearch={(value) => {
          setSearchQuery(value); // Set search query
        }}
        style={{ marginBottom: 10 }}
      />
      <Table
        dataSource={
          searchQuery
            ? reports.filter(
                (item) =>
                  item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.Email.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : reports
        } // Filter data based on search query
        columns={columns}
        pagination={{ pageSize: 10 }}
        locale={{
          emptyText: 'No data available',
        }}
      />
    </div>
  );
};

export default Reports;
