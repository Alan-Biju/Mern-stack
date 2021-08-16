import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
const Form = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [gender, setGender] = useState('');
	const [age, setAge] = useState('');
	const [country, setCountry] = useState('');
	const [message, setMessage] = useState('');
	const registerHandler = async (e) => {
		e.preventDefault();
		console.log(firstname, lastname, gender, age, country);
		axios
			.post('http://localhost:4000/register', {
				firstname,
				lastname,
				gender,
				age,
				country,
			})
			.then(function (response) {
				setMessage(response.data);
			})
			.catch(function (error) {
				setMessage(error.response.data.data);
			});
		setFirstname('');
		setLastname('');
		setGender('');
		setAge('');
		setCountry('');
	};
	return (
		<FormConatiner>
			<FormBox autoComplete='off' onSubmit={registerHandler}>
				<TitleContainer>
					<Title>Register</Title>
				</TitleContainer>
				<BodyContainer>
					{message ? (
						<Message>{message}</Message>
					) : (
						<Message>
							<br />
						</Message>
					)}
					<InputBox>
						<Input
							type='text'
							label='First Name'
							state={[firstname, setFirstname]}
						/>
						<Input
							type='text'
							label='Last Name'
							state={[lastname, setLastname]}
						/>
						<Input type='text' label='Gender' state={[gender, setGender]} />
						<Input type='number' label='Age' state={[age, setAge]} />
						<Input
							type='text'
							label='Nationality'
							state={[country, setCountry]}
						/>
					</InputBox>
					<ButtonConatiner>
						<button type='submit' style={{ margin: '10px 0 0 0' }}>
							Add User
						</button>
					</ButtonConatiner>
				</BodyContainer>
			</FormBox>
		</FormConatiner>
	);
};

export default Form;
const FormConatiner = styled.section`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
	padding: 5px;
`;
const FormBox = styled.form`
	max-width: 100%;
	min-width: 240px;
	width: 100%;
	height: 600px;
	border-radius: 5px;
`;
const InputBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding: 35px;
	height: 360px;
	width: 100%;
	max-width: 500px;
	min-height: 100%;
	margin: 0 auto;
`;

const Message = styled.p`
	width: 100%;
	text-align: center;
	padding: 15px 0;
	font-family: 'Raleway', sans-serif;
	color: #ff2e63;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 0.7rem;
`;

const TitleContainer = styled.div`
	background-color: #e0e0e0;
	width: 100%;
	height: 100px;
	padding: 35px;
	display: flex;
	align-items: center;
	background-image: url('image/back.svg');
	background-repeat: no-repeat;
	background-size: 150% 100%;
`;
const Title = styled.p`
	font-family: 'Raleway', sans-serif;
	font-size: 2rem;
	font-weight: 700;
	letter-spacing: 1px;
`;
const BodyContainer = styled.div``;

export const ButtonConatiner = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	button {
		width: 200px;
		display: inline-block;
		padding: 0.7em 1.7em;
		margin: 0 0.3em 0.3em 0;
		border-radius: 0.2em;
		font-family: 'Raleway', sans-serif;
		font-weight: 500;
		letter-spacing: 1px;
		color: #ffffff;
		background-color: #00adb5;
		text-align: center;
		border: none;
		outline: none;
		cursor: pointer;
		&:active {
			box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
				inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
		}
	}
`;
