/**
 * External dependencies
 */
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useIntersectionObserver = (threshold = 0.5) => {
	const controls = useAnimation();

	const [element, view] = useInView({ threshold });

	useEffect(() => {
		view ? controls.start('show') : controls.start('hidden');
	}, [view, controls]);

	return { element, controls };
};

export default useIntersectionObserver;
