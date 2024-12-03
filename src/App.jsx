import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Second from './pages/Second';
import Third from './pages/Third';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/2-1' element={<Second />} />
      <Route path='/2-2' element={<Third />} />
      {/* <Route path='/3' element={<Fourth />} /> */}
    </Routes>
  );
}

export default App;
