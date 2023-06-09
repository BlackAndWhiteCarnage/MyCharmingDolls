/**
 * External dependencies
 */
import { FC, useState, useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { AccordionItemProps } from '@/components/AccordionItem/AccordionItem';
import { AccordionItem } from '@/components';
import classes from './Accordion.module.scss';

type AccordionProps = {
	className?: string;
	expanded?: number;
	items: Array<Omit<AccordionItemProps, 'onToggle'>>;
};

const cx = classnames.bind(classes);

const Accordion: FC<AccordionProps> = ({ className, expanded = 0, items }) => {
	const [expandedItem, setExpandedItem] = useState<number>();

	useEffect(
		() =>
			setExpandedItem(Math.max(Math.min(expanded, items.length - 1), 0)),
		[expanded, items]
	);

	return (
		<div className={cx('wrapper', className)}>
			{items.map((props, index) => (
				<AccordionItem
					{...props}
					key={index}
					open={expandedItem === index}
					onToggle={() => setExpandedItem(index)}
				/>
			))}
		</div>
	);
};

export default Accordion;
