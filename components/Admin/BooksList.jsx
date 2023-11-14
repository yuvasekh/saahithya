import React, { useEffect, useState } from 'react';
import { Table, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getallfiles, deleteFile } from '../services/api'; // Import deleteFile function

const BooksList = (props) => {
  const [reports, setReports] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  async function fetchData(pagecount) {
    try {
      let res = await getallfiles(pagecount);
      console.log(res, "books");
      if (res && res.length > 0) {
        const head = Object.keys(res[0]);
        setHeaders(head);
        setReports(res);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  function readPage(item) {
    console.log(item.FileId, "message");
    let file = item.FileId;
    navigate("/read", { state: { myProp: file } });
  }

  // Corrected function name to deletebook to deleteuser
  async function deleteuser(item) {
    console.log(item);
    await deleteFile(item);
    // After deleting, you may want to refresh the data
    // fetchData(10);
  }

  useEffect(() => {
    fetchData(10);
  }, []);

  const filterData = () => {
    if (searchValue === '') {
        console.log(reports,"reports")
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
      title: 'Delete the Book',
      key: 'delete',
      render: (text, record) => (
        <Button onClick={() => deleteuser(record.FileId)}>Delete</Button>
      ),
    },   {
        title: 'Review ',
        key: 'review',
        render: (text, record) => (
          <Button onClick={() => readPage(record)}>Read</Button>
        ),
      },
  );

  return (
    <div className="listdata">
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
        pagination={{
          pageSize: 10,
         
        }}
        locale={{
          emptyText: 'No data available',
        }}
      />
    </div>
  );
};

export default BooksList;
