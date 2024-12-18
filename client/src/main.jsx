import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { Providers } from './Providers/Providers';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>,
);
