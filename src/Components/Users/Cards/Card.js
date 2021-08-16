import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Card = ({ Data }) => {
    const words = ['male', 'Male', 'm', 'boy'];
	return (
		<CardBox>
			<img
				src={
					words.includes(Data && Data.gender)
						? `Assets/male.svg`
						: `Assets/female.svg`
				}
				alt='avatar'
			/>
			<Name>{Data.firstname + Data.lastname}</Name>
			<Button to={`/Details/${Data._id}`}>See More</Button>
		</CardBox>
	);
};

export default Card;
const CardBox = styled.div`
	width: 250px;
	height: 300px;
	margin: 40px 10px;
	border-radius: 8px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border: 1px solid #71efa3a2;
	position: relative;
	img {
		width: 80px;
		object-fit: contain;
		position: absolute;
		top: -40px;
		left: 30%;
	}
	display: grid;
	place-items: center;
`;
const Name = styled.h3`
	letter-spacing: 1px;
	font-weight: 600;
`;
const Button = styled(Link)`
	display: grid;
	place-items: center;
	text-decoration: none;
	width: 150px;
	height: 30px;
	border: 1px solid #71efa3;
	color: #4de088;
	font-size: 0.8rem;
	font-weight: 600;
	transition-duration: 0.5s;
	&:hover {
		background-color: #71efa3;
		color: #ffffff;
	}
`;
