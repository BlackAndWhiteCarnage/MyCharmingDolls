/**
 * External dependencies
 */
import { FC, InputHTMLAttributes } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Textarea.module.scss';

const cx = classnames.bind(classes);

type TextareaProps = {
	id: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

/**
 * Textarea component
 */
const Textarea: FC<TextareaProps> = ({ ...props }) => (
	<div className={classes.textarea}>
		<textarea {...props} className={cx('field', 'is-style-p')} />
	</div>
);

export default Textarea;
