import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import Hello from './ch01/components/Hello';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
// root.render(<div>test</div>);
// root.render(<Hello />);
