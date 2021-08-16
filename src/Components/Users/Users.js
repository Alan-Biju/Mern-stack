import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Cards/Card';

const Users = () => {
	const [data, setData] = useState();
	useState(() => {
		const fetchData = axios
			.get('http://localhost:4000/user')
			.then(function (response) {
				// handle success
				setData(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
		return () => {
			fetchData();
		};
	}, []);
	return (
		<UsersContainer>
			{data && data.length > 0 ? (
				data.map((item) => {
					return <Card key={item._id} Data={item} />;
				})
			) : (
				<Image>
					<img src='Assets/empty.svg' alt='no Data' />
				</Image>
			)}
		</UsersContainer>
	);
};

export default Users;
const UsersContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	background-color: #f6f6f6;
`;
const Image = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
	img {
		width: 300px;
		object-fit: contain;
	}
`;
