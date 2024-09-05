import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

function AvailabilityInput({ auth }) {
  const [availability, setAvailability] = useState([]);

  const handleAddSlot = (day, startTime, endTime) => {
    setAvailability([...availability, { day, startTime, endTime }]);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/availability', { availability }, { headers: { Authorization: `Bearer ${auth}` } });
    } catch (error) {
      console.error('Submit error', error);
    }
  };

  return (
    <div>
      <h2>Your Availability</h2>
      <button onClick={handleSubmit}>Save Availability</button>

    </div>
  );
}

export default AvailabilityInput;
