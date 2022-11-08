
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
