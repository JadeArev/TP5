import './App.css';
import Navbar from './components/navbar';
import Carrousel from './components/carrousel';
import Marcas from './components/Marcas';
import Footer from './components/footer';
import Card from './components/card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from './components/navbar';


function App() {
  return ( 
    <div className="App">
      	<Navbar/>
        
        <Carrousel/>

		<div className='container'>
			<h3 className=" mt-4 mb-4" text-Align="left">Productos destacados</h3>
		</div>
		<Row>
			<Col> <Card/> </Col>
			<Col> <Card/> </Col>
			<Col> <Card/> </Col>
		</Row>
		<Row>
			<Col> <Card/> </Col>
			<Col> <Card/> </Col>
			<Col> <Card/> </Col>
		</Row>
		<Marcas/>
		<Footer/>

      


    </div>
  );
}

export default App;