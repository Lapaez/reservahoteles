// dependencies
import React, { useState, createContext } from 'react';

export const FiltroContexto = createContext();

export const FilterProvider = (props) => {
	const [filter, setFilter] = useState({
		checkIn: {},
		checkOut: {},
		country: "Todos los paises",
		price: "Cualquier precio",
		size: "Cualquier tamaño",
	});

	return (
		<FiltroContexto.Provider value={[filter, setFilter]}>
			{props.children}
		</FiltroContexto.Provider>
	);
};