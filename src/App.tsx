import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './Layouts/DashboardLayout';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';

import { Splash } from './pages/Splash';
import { Success } from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="/app/checkout/success" element={<Success />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
