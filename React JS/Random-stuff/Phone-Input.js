import React from 'react';
import './style.css';

import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

export default function App() {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <PhoneInput
        placeholder="Enter your Number"
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true
        }}
        onChange={e=>console.log(e)}
        country={'in'}
      />
      <h1>Hello StackBlitz!</h1>
      {value}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
