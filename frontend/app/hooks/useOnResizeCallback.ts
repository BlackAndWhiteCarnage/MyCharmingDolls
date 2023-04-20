/**
 * External dependencies
 */
import { useEffect, useCallback } from 'react';

const useOnResizeCallback = (callback: () => void, invokeInitially = false) => {
	const memoizedCallback = useCallback(callback, [callback]);

	useEffect(() => {
		invokeInitially && callback();
	}, [callback, invokeInitially]);

	useEffect(() => {
		const handleResize = () => memoizedCallback();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [memoizedCallback]);
};

export default useOnResizeCallback;
