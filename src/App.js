import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { Routes, Route } from 'react-router-dom';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};
// Routes enables react route use
// Route enables one route
// <Route path='/' element={<Home />} /> means render the Home element when the path "/" is matched
// Index matches the '/' of the parent route; in this case we make the nav bar appear on every route

export default App;
