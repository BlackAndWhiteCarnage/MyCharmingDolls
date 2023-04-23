/**
 * External dependencies
 */
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * External dependencies
 */
import classes from './List.module.scss';

type ListProps = {
	text: string;
};

const List: FC<ListProps> = ({ text }) => (
	<ReactMarkdown className={classes.list}>{text}</ReactMarkdown>
);

export default List;
