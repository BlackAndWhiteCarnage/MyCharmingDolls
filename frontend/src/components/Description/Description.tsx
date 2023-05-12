/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

/**
 * Internal dependencies
 */
import classes from './Description.module.scss';

const cx = classnames.bind(classes);

type DescriptionProps = {
	className?: string;
	limit?: boolean;
	text: string;
};

const Description: FC<DescriptionProps> = ({
	className,
	limit = false,
	text,
}) => (
	<div className={cx('wrapper', 'is-style-p', className)}>
		<ReactMarkdown>
			{limit
				? text
						.split(/\n+/)
						.filter((block) => block.trim().length > 0)
						.slice(0, 2)
						.join('\n\n') + '...'
				: text}
		</ReactMarkdown>
	</div>
);

export default Description;
