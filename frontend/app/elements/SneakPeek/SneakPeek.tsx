import { FC } from 'react';
import classnames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

import classes from './SneakPeek.module.scss';

const cx = classnames.bind(classes);

type SneakPeekProps = {
	limit?: 2 | 3;
	text: string;
};

const SneakPeek: FC<SneakPeekProps> = ({ limit = 2, text }) => (
	<div className={cx('wrapper', 'is-style-p')}>
		<ReactMarkdown>
			{text
				.split(/\n+/)
				.filter((block) => block.trim().length > 0)
				.slice(0, limit)
				.join('\n\n')}
		</ReactMarkdown>
	</div>
);

export default SneakPeek;
