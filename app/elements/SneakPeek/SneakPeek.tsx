/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './SneakPeek.module.scss';

const cx = classnames.bind(classes);

type SneakPeekProps = {
	textBlocks: Array<string>;
};

const SneakPeek: FC<SneakPeekProps> = ({ textBlocks }) => (
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

export default SneakPeek;
