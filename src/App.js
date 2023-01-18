import { Routes, Route, React } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:id' element={<Post />}></Route>
        <Route path='/post/add' element={<PostAdd />}></Route>
        <Route path='/post/edit/:id' element={<PostEdit />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
