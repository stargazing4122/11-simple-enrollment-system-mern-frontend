// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { EnrollmentApp } from './EnrollmentApp';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <EnrollmentApp />
//   </React.StrictMode>
// );

import ReactDOM from 'react-dom';
import { EnrollmentApp } from './EnrollmentApp';

import './index.css';

ReactDOM.render(
    <EnrollmentApp />,
  document.getElementById('root')
);