import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: lightblue;
  margin: 1%;
`;

const ReactWeatherApp = () => {
  const [studentId, setStudentId] = useState('');
  const [providerId, setProviderId] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [dateRange, setDateRange] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const formattedToday = new Date().toISOString().slice(0, 10);

  const yesterDayFilter = () => {
    const today = new Date();
    const yesterdayFilter = new Date(today);

    yesterdayFilter.setDate(yesterdayFilter.getDate() - 1);

    const yesterday = yesterdayFilter.toISOString().slice(0, 10);

    return yesterday;
  };

  const handleFilterClick = () => {
    let queryType = '';
    let queryStr = '';

    if (dateRange === 'all') {
      queryType = 'all';
      queryStr = 'all';
    } else if (dateRange === 'today') {
      queryType = 'date';
      setStartDate(formattedToday);
      setEndDate(formattedToday);
      queryStr = formattedToday;
    } else if (dateRange === 'yesterday') {
      const yesterday = yesterDayFilter();
      queryType = 'date';
      setStartDate(yesterday);
      setEndDate(yesterday);
      queryStr = yesterday;
      console.log('Yesterday:', queryStr);
    } // ... (Other date range conditions)

    if (queryStr !== '') {
      const queryData = {
        student_id: studentId,
        provider_id: providerId,
        service_type: serviceType,
        query_type: queryType,
        from_date: startDate,
        to_date: endDate
      };
      console.log('Query Data:', queryData);
    }
  };

  return (
    <Container>
      <input
        type="text"
        id="student_id_input"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        id="provider_id_input"
        value={providerId}
        onChange={(e) => setProviderId(e.target.value)}
      />
      <input
        type="text"
        id="service_type_input"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
      />
      <select
        id="date_range"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        {/* Other date range options */}
      </select>
      {/* Other date inputs if needed */}
      <button id="filter_button" onClick={handleFilterClick}>
        Filter
      </button>
    </Container>
  );
};

export default ReactWeatherApp;