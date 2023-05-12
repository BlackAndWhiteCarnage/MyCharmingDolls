/**
 * External dependencies
 */
import { FC, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Textarea.module.scss';

const cx = classnames.bind(classes);

type TextareaProps = {
	name: string;
	validation?: RegisterOptions;
} & InputHTMLAttributes<HTMLTextAreaElement>;

const Textarea: FC<TextareaProps> = ({ name, validation, ...props }) => {
	const formContext = useFormContext();
	const hasError = formContext.control.getFieldState(name).error;

	return (
		<div className={cx('textarea')}>
			<textarea
				className={cx('field', 'is-style-p', {
					hasError,
				})}
				{...props}
				{...(formContext &&
					validation &&
					formContext.register(name, {
						...validation,
					}))}
			/>
		</div>
	);
};

export default Textarea;
