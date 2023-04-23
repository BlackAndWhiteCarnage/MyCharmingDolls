export const changeTheme = (
	primary = '#585858',
	secondary = '#8F1CB0',
	background = '#F8F8F8'
) => {
	const colors = [primary, secondary, background];
	const properties = [
		'--theme-color-primary',
		'--theme-color-secondary',
		'--theme-color-background',
	];

	colors.forEach((color, index) =>
		document.documentElement.style.setProperty(properties[index], color)
	);
};
