/**
 * External dependencies
 */
import { FC, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Input.module.scss';

export type InputProps = {
	name: string;
	validation?: RegisterOptions;
} & InputHTMLAttributes<HTMLInputElement>;

const cx = classnames.bind(classes);

const Input: FC<InputProps> = ({
	className,
	name,
	type = 'text',
	validation,
	...props
}) => {
	const formContext = useFormContext();
	const hasError = formContext.control.getFieldState(name).error;

	return (
		<div className={cx('input', className)}>
			<input
				{...props}
				className={cx('field', 'is-style-label', {
					hasError,
				})}
				type={type}
				{...(formContext &&
					validation &&
					formContext.register(name, {
						...validation,
					}))}
			/>
		</div>
	);
};

export default Input;
