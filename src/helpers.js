const translateUnit = (unit) => {
	switch(unit) {
		case 'minutes':
			return 'minuten';
		case 'hour':
			return 'uur';
		case 'stuks':
		case 'pieces':
			return 'stuks';
		case 'eetlepel':
		case 'tablespoon':
			return 'eetlepel';
		case 'theelepel':
		case 'teaspoon':
			return 'theelepel';
		case 'gram':
			return 'gram';
		case 'kilo':
			return 'kilo';
		case 'liter':
			return 'liter';
		case 'mililiter':
			return 'mililiter';
		case 'cloves':
		case 'tenen':
			return 'tenen';
		case 'leaves':
		case 'blaadjes':
			return 'blaadjes';
		default:
			break;
	}
}

export { translateUnit }