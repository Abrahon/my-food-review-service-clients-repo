
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
