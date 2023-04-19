'use client';

/**
 * External dependencies
 */
import { FC, HTMLAttributes } from 'react';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
} from 'react-hook-form';
import { ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormProps = Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> & {
	schema?: ObjectSchema<any>;
	onSubmit?: SubmitHandler<any>;
};

const Form: FC<FormProps> = ({ onSubmit, schema, ...props }) => {
	const methods = useForm(schema ? { resolver: yupResolver(schema) } : {});

	const onSubmitProxy = (data: FieldValues) => {
		onSubmit && onSubmit(data);
	};

	return (
		<FormProvider {...methods}>
			<form {...props} onSubmit={methods.handleSubmit(onSubmitProxy)} />
		</FormProvider>
	);
};

export default Form;
