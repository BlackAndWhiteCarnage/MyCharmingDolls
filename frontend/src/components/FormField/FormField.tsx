/**
 * External dependencies
 */
import { ErrorMessage } from '@hookform/error-message';
import { ReactElement } from 'react';
import { RegisterOptions, useFormState } from 'react-hook-form';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Input, Textarea } from '@/components';
import { InputProps } from '@/components/Input/Input';
import classes from './FormField.module.scss';

type FormFieldProps<T> = {
	label?: string;
	name: T;
	type?: 'input' | 'textarea';
	validation?: RegisterOptions;
} & Omit<InputProps, 'type'>;

const cx = classnames.bind(classes);

const FormField = <T extends string>({
	label,
	name,
	validation,
	type = 'input',
	...props
}: FormFieldProps<T>): ReactElement | null => {
	const { errors } = useFormState();

	return (
		<div className={cx('wrapper', 'is-style-label')}>
			{label && (
				<label className={classes.label} htmlFor={name}>
					{label}
				</label>
			)}
			{type === 'input' ? (
				<Input validation={validation} name={name} {...props} />
			) : (
				<Textarea validation={validation} name={name} />
			)}
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => (
					<p className={cx('error', 'is-style-label')}>{message}</p>
				)}
			/>
		</div>
	);
};

export default FormField;
