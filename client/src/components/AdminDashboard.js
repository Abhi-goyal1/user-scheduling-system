import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard({ auth }) {
  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get('/api/availability', { headers: { Authorization: `Bearer ${auth}` } });
        setAvailability(response.data);
      } catch (error) {
        console.error('Fetch error', error);
      }
    };
    fetchAvailability();
  }, [auth]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
     
    </div>
  );
}

export default AdminDashboard;
