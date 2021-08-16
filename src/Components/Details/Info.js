import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Info = () => {
	const [data, setData] = useState();
	const { id } = useParams();
	useState(() => {
		const fetchData = axios
			.get(`http://localhost:4000/info/${id}`)
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
	const words = ['male', 'Male', 'm', 'boy'];
	return (
		<InfoConatiner>
			{data && (
				<InfoBox>
					<img
						src={
							words.includes(data[0].gender)
								? `/Assets/male.svg`
								: `/Assets/female.svg`
						}
						alt='avatar'
					/>
					<Name>
						<p>
							FirstName : <span>{data[0].firstname}</span>
						</p>
						<p>
							LastName : <span>{data[0].lastname}</span>
						</p>
					</Name>
					<Details>
						<p>
							Gender : <span>{data[0].gender}</span>
						</p>
					</Details>
					<Details>
						<p>
							Age : <span>{data[0].age}</span>
						</p>
					</Details>
					<Details>
						<p>
							Nationality : <span>{data[0].nationality}</span>
						</p>
					</Details>
				</InfoBox>
			)}
		</InfoConatiner>
	);
};

export default Info;
const InfoConatiner = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;
	background-color: #f6f6f6;
	background-image: url('/Assets/background.png');
    padding: 10px;
`;
const InfoBox = styled.div`
	width: 100%;
	max-width: 350px;
	min-width: 260px;
	height: 500px;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	padding: 15px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	img {
		width: 100px;
		object-fit: contain;
	}
`;
const Name = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	p {
		font-size: 0.9rem;
	}
	span {
		font-weight: 600;
		font-size: 1.1rem;
	}
`;
const Details = styled.div`
	p {
		font-size: 0.9rem;
	}
	span {
		font-weight: 600;
		font-size: 1.1rem;
	}
`;
