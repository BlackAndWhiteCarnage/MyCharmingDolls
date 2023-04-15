/**
 * External dependencies
 */
import { useEffect, useCallback } from 'react';

const useOnResizeCallback = (callback: () => void, invokeInitially = true) => {
	const memoizedCallback = useCallback(callback, [callback]);

	useEffect(() => {
		invokeInitially && callback();
		/**
		 * We can ignore this warning cause callback should
		 * run only initially without any care that it will change later.
		 */
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const handleResize = () => memoizedCallback();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [memoizedCallback]);
};

export default useOnResizeCallback;
