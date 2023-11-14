import React, { useEffect, useState } from 'react';
import './Quizscores.scss'
import { Table, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { poleparticipators, getquizresults } from '../services/api';

const QuizScores = (props) => {
  const [reports, setReports] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        let res;
        if (props.value === 'quizResults') {
          res = await poleparticipators();
        }
        if (props.value === 'pollResults') {
          res = await getquizresults();
        }

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
        pagination={{ pageSize: 10 }}
        locale={{
          emptyText: 'No data available',
        }}
      />
    </div>
  );
};

export default QuizScores;
