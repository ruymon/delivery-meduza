import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './Layouts/DashboardLayout';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';

import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
