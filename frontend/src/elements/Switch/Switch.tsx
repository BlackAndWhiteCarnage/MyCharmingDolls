/**
 * External dependencies
 */
import { ReactElement, useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Switch.module.scss';

export type SwitchProps<T extends Record<string, string>> = {
	activeOption: keyof T;
	label?: string;
	onChange?: (activeOption: keyof T) => void;
	options: T;
};

const cx = classnames.bind(classes);

/**
 * Switch component
 */
const Switch = <T extends Record<string, string>>({
	activeOption,
	label,
	onChange,
	options,
}: SwitchProps<T>): ReactElement | null => {
	const listRef = useRef<HTMLUListElement>(null);
	const listItemsRef = useRef<Array<HTMLLIElement | null>>([]);
	const [indicatorProperties, setIndicatorProperties] = useState({
		width: '0',
		left: '0',
	});

	useEffect(() => {
		const activeOptionIndex = Object.keys(options).findIndex(
			(key) => activeOption === key
		);

		const getAttribute = <A extends keyof HTMLLIElement>(attribute: A) =>
			listItemsRef.current && activeOptionIndex !== undefined
				? listItemsRef.current[activeOptionIndex]?.[attribute] || 0
				: 0;

		setIndicatorProperties({
			width: `${getAttribute('offsetWidth')}px`,
			left: `${getAttribute('offsetLeft')}px`,
		});
	}, [activeOption, options]);

	return (
		<div className={classes.wrapper}>
			{label && (
				<p className={cx('label', 'is-style-label-small')}>{label}</p>
			)}
			<div className={classes.switch}>
				<ul className={classes.wrap} ref={listRef}>
					{Object.entries(options).map(([key, value], index) => (
						<li
							key={key}
							className={cx('itemWrap', {
								isActive: activeOption === key,
							})}
							ref={(el) => (listItemsRef.current[index] = el)}
						>
							<button
								className={cx('item', 'is-style-label-small')}
								onClick={() => onChange?.(key)}
							>
								{value}
							</button>
						</li>
					))}
				</ul>
				<div
					className={classes.indicator}
					style={{
						width: indicatorProperties.width,
						left: indicatorProperties.left,
					}}
				/>
			</div>
		</div>
	);
};

export default Switch;
