import React from 'react';

// components
import Header from './componente/Header';
import Hoteles from './componente/Hoteles';
import { FilterProvider } from './componente/FiltroContexto';

const App = () => {
	return (
			<FilterProvider>
				<Header />
				<Hoteles />
			</FilterProvider>
	);
};

export default App;
