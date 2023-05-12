/**
 * External dependencies
 */
import { FC, useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import classnames from 'classnames/bind';
import emailjs from 'emailjs-com';

/**
 * Internal dependencies
 */
import {
	getEmailValidationRules,
	getMessageValidationRules,
} from '@/utils/validation';
import { Button, FormField } from '@/components';
import classes from './ContactForm.module.scss';

const cx = classnames.bind(classes);

type ContactFormFields = {
	email: string;
	message: string;
};

const ContactForm: FC = () => {
	const [submitdFeedback, setSubmitFeedback] = useState<{
		type: string;
		message: string;
	} | null>(null);

	const methods = useForm<ContactFormFields>();

	const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				data,
				process.env.NEXT_PUBLIC_EMAILJS_USER!
			)
			.then(
				(result) => {
					result.status === 200 &&
						setSubmitFeedback({
							type: 'success',
							message:
								"Email was send! I'll respond as soon as I see the message. ❤️",
						});
				},
				(error) => {
					error &&
						setSubmitFeedback({
							type: 'error',
							message:
								'Something went wrong. Please try again later. 🙈',
						});
				}
			);
	};

	return (
		<FormProvider {...methods}>
			<form
				className={classes.wrapper}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{submitdFeedback && (
					<div className={cx('submitFeedback', submitdFeedback.type)}>
						<p className={cx('is-style-h2')}>
							{submitdFeedback.message}
						</p>
					</div>
				)}
				<FormField
					name="email"
					type="input"
					label="Email"
					validation={getEmailValidationRules()}
				/>
				<FormField
					name="message"
					type="textarea"
					label="Message"
					validation={getMessageValidationRules()}
				/>
				<Button type="submit" hasArrow>
					Send message
				</Button>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
