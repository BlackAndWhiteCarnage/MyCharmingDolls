/**
 * External dependencies
 */

import { useEffect } from 'react';

const useClickOutside = (
	element: HTMLElement | null,
	onClickOutside: () => void,
	dataTarget?: string
) =>
	useEffect(() => {
		const toggle = (e: MouseEvent) => {
			if (element) {
				const target = e.target as HTMLElement;

				!element.contains(target) &&
					element !== target &&
					(!dataTarget || target.dataset.target !== dataTarget) &&
					onClickOutside();
			}
		};

		window.addEventListener('click', toggle);

		return () => window.removeEventListener('click', toggle);
	}, [element, onClickOutside, dataTarget]);

export default useClickOutside;
