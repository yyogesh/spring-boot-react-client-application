import './App.css';
import AllPosts from './components/AllPosts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2} sx={{ padding: '2%' }}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;