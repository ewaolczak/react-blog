import { Routes, Route, React } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import PostAdd from './components/pages/PostAdd/PostAdd';
import PostEdit from './components/pages/PostEdit/PostEdit';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import CategoryPosts from './components/pages/CategoryPosts/CategoryPosts';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:id' element={<Post />}></Route>
        <Route path='/post/add' element={<PostAdd />}></Route>
        <Route path='/post/edit/:id' element={<PostEdit />}></Route>
        <Route path='/categories' element={<Categories />}></Route>
        <Route path='/categories/:category' element={<CategoryPosts />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
