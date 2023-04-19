/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import classes from './List.module.scss';

type ListProps = {
	listItems: Array<string>;
};

const cx = classnames.bind(classes);

const List: FC<ListProps> = ({ listItems }) => (
	<ul className={classes.list}>
		{listItems.map((listItem, index) => (
			<li
				className={cx('listItem', 'is-style-list-item')}
				key={`${listItem}-${index}`}
			>
				{listItem}
			</li>
		))}
	</ul>
);

export default List;
