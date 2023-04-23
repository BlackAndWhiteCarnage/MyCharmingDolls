/**
 * External dependencies
 */
import { useEffect, useRef } from 'react';

const useOnResizeCallback = (callback: () => void, invokeInitially = false) => {
	const ref = useRef(callback);

	ref.current = callback;

	useEffect(() => {
		invokeInitially && ref.current();
	}, [invokeInitially]);

	useEffect(() => {
		window.addEventListener('resize', ref.current);

		return () => window.removeEventListener('resize', ref.current);
	}, []);
};

export default useOnResizeCallback;
