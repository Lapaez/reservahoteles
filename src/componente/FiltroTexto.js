import React, { useContext } from 'react';
import { FiltroContexto } from './FiltroContexto';

// moment.js
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


const FiltroTexto = () => {
	const [filter] = useContext(FiltroContexto);
	const format = 'dddd[,] D [de] MMMM [de] YYYY';
	const checkInDateFormat = moment(filter.checkIn).format(format);
	const checkOutDateFormat = moment(filter.checkOut).format(format);

	const setFilterCountryText = (country) => {
		return country === 'Todos los paises' ? false : ` en ${country}`;
	};

	const setFilterPriceText = (price) => {
		switch (price) {
			case '1':
				return ' de precios económicos';
			case '2':
				return ' de precios confort';
			case '3':
				return ' de precios lujos';
			case '4':
				return ' de precios magnificos';
			default:
				return false;
		}
	};

	const setFilterSizeText = (size) => {
		switch (size) {
			case 'Hotel pequeño':
				return ' y de tamaños pequeños';
			case 'Hotel mediano':
				return ' y de tamaños medianos';
			case 'Hotel grande':
				return ' y de tamaños grandes';
			default:
				return false;
		}
	};

	return (
		<p>
			desde el <b>{checkInDateFormat}</b> hasta el{' '}
			<b>{checkOutDateFormat}</b>
			{setFilterCountryText(filter.country)}
			{setFilterPriceText(filter.price)}
			{setFilterSizeText(filter.size)}.
		</p>
	);
};

export default FiltroTexto;
