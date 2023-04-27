import React, { useState } from 'react';
import CalendarApoyo from 'react-calendar';

function CalendarioApoyo() {
  const [value, onChange] = useState(new Date());

  return (
    <div  className='react-calendar '>
      <CalendarApoyo onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarioApoyo;