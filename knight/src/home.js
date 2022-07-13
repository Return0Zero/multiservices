import './home.css';
import Navbar from './containers/navbar/navbar'
import Header from './containers/header/header'
import About from './containers/about/about'
import Add from './containers/add/add'
import Services from './containers/services/services'
import Contact from './containers/contact/contact'
import Footer from './containers/footer/footer'

function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Add></Add>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
