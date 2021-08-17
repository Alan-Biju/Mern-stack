import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
const Loading = () => {
	return (
		<>
			<ImageBox>
				<ReactLoading type={'bars'} color={'#71EFA3'} height={30} width={80} />
			</ImageBox>
		</>
	);
};

export default Loading;
const ImageBox = styled.div`
	width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`;
