import React from 'react';
import styled from 'styled-components';
import { BiUser, BiUserPlus } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
	return (
		<StyledConatiner>
			<MenuItems>
				<Items to='/' activeClassName='active' exact>
					<User /> <p>USER</p>
				</Items>
				<Items to='/Add' activeClassName='active' exact>
					<Add /> <p>ADD</p>
				</Items>
			</MenuItems>
		</StyledConatiner>
	);
};

export default SideBar;
const StyledConatiner = styled.section`
	background-color: #71efa3;
	width: 100%;
	max-width: 220px;
	min-width: 200px;
	height: 100vh;
	transition: all 0.4s ease;
	position: sticky;
	left: 0;
	top: 0;
	@media (max-width: 870px) {
		max-width: 50px;
		min-width: 50px;
		min-height: 100%;
	}
`;
const Add = styled(BiUserPlus)`
	font-size: 1.5rem;
`;
const User = styled(BiUser)`
	font-size: 1.2rem;
`;
const MenuItems = styled.div`
	width: 100%;
	padding: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const Items = styled(NavLink)`
	width: 90%;
	height: 30px;
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	font-size: 1rem;
	padding-left: 15px;
	color: #50cb93;
	border-radius: 15px;
	cursor: pointer;
	position: relative;
	margin: 5px 0;
	text-decoration: none;
	&.active {
		&::after {
			content: '';
			position: absolute;
			top: 43%;
			right: 15px;
			background-color: #3fb881;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			z-index: 5;
			@media (max-width: 870px) {
				display: none;
			}
		}
	}
	@media (max-width: 870px) {
		width: 40px;
		height: 40px;
		padding-left: 0;
		justify-content: center;
		border-radius: 5px;
		font-size: 1rem;
	}

	p {
		text-transform: uppercase;
		font-weight: 600;
		padding-left: 10px;
		font-size: 0.9rem;
		@media (max-width: 870px) {
			display: none;
		}
	}
`;
