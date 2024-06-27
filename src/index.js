import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch18/App';
import Hello from './ch01/components/Hello';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>
);
// root.render(<div>test</div>);
// root.render(<Hello />);
