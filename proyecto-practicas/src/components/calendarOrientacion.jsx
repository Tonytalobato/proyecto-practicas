import React, { useState } from 'react';
import CalendarOrientacion from 'react-calendar';

function CalendarioOrientacion() {
  const [value, onChange] = useState(new Date());

  return (
    <div  className='react-calendar '>
      <CalendarOrientacion onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarioOrientacion;