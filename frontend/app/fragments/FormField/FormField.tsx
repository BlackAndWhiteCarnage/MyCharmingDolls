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
import { Input } from '@/elements';
import { InputProps } from '@/elements/Input/Input';
import classes from './FormField.module.scss';

type FormFieldProps<T> = {
	label?: string;
	name: T;
	validation?: RegisterOptions;
} & InputProps;

const cx = classnames.bind(classes);

const FormField = <T extends string>({
	label,
	name,
	validation,
	...props
}: FormFieldProps<T>): ReactElement | null => {
	const { errors } = useFormState();

	return (
		<div className={cx('wrapper', 'is-style-label')}>
			{label && (
				<label className={classes.label} htmlFor={name}>
					{validation?.required && (
						<span className={classes.asterisk}>*</span>
					)}
					{label}
				</label>
			)}
			<Input validation={validation} name={name} {...props} />
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
