const nf = new Intl.NumberFormat();

export const Byte = (fileSize) => {
	let str = '';

	if (!fileSize) return '';

	if (fileSize >= 1024 * 1024) {
		fileSize = Math.round(fileSize / (1024 * 1024));
		str = nf.format(fileSize) + 'MB';
	} else if (fileSize >= 1024) {
		fileSize = Math.round(fileSize / 1024);
		str = nf.format(fileSize) + 'KB';
	} else {
		str = nf.format(fileSize) + 'Byte';
	}
	return str;
};
