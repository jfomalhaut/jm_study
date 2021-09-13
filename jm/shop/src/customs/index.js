const nf = new Intl.NumberFormat();

export const Comma = (number) => {
	return nf.format(number);
};