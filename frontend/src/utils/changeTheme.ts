export const changeTheme = (color = '#8F1CB0') => {
	document.documentElement.style.setProperty(
		'--theme-color-secondary',
		color
	);
};
