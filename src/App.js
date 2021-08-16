import './App.css';
import { Switch, Route } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import Users from './Components/Users/Users';
import styled from 'styled-components';
import Form from './Components/Register/Form';
import Info from './Components/Details/Info';
function App() {
	return (
		<MainConatiner>
			<SideBar />
			<Switch>
				<Route path='/' component={Users} exact />
				<Route path='/Add' component={Form} exact />
				<Route path='/Details/:id' component={Info} exact />
			</Switch>
		</MainConatiner>
	);
}

export default App;
const MainConatiner = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;
