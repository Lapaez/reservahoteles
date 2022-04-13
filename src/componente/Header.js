// dependencies
import React from 'react';
import styled from 'styled-components';
import Filtros from './Filtros';
import FiltroTexto from './FiltroTexto';


const HeroContainer = styled.section`
	margin: 0;
	padding: 3%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #ffffff;
    text-align: Left;
    background-color: #01d0b1;
    height: 300px;
`;

const Header = () => {

	return (
		<header>
			<HeroContainer>
				<h1>Hoteles</h1>
				<br />
				<FiltroTexto/>
				
			</HeroContainer>
			<Filtros />
		</header>
	);
};

export default Header;
