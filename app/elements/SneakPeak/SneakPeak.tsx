/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './SneakPeak.module.scss';

const cx = classnames.bind(classes);

type SneakPeakProps = {
	textBlocks: Array<string>;
};

const SneakPeak: FC<SneakPeakProps> = ({ textBlocks }) => (
	<div className={cx('wrapper', 'is-style-p')}>
		{textBlocks.map((text, index) => (
			<p
				key={`${text}-${index}`}
				className={cx('textBlock', {
					fadeOut: index === textBlocks.length - 1,
				})}
			>
				{text}
			</p>
		))}
	</div>
);

export default SneakPeak;
