import '../CSS/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header'
import Products from '../Pages/Products'
import Contact from './Contact';

function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<> <Header/><Products/> </>} />
				<Route path='Contact' element={<> <Header/><Contact/> </>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
