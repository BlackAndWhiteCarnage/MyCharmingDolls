/**
 * External dependencies
 */
import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { ReactComponent as ArrowIcon } from '@/images/icons/arrow.svg';
import { Link } from '@/components';
import classes from './Button.module.scss';

const cx = classnames.bind(classes);

type BaseButtonProps = {
	hasArrow?: boolean;
	hasFullWidth?: boolean;
	variant?: 'primary' | 'secondary';
};

type RealButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type AnchorButtonProps = {
	href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

type ButtonProps = BaseButtonProps & (RealButtonProps | AnchorButtonProps);

const AnchorButton: FC<AnchorButtonProps> = (props) => <Link {...props} />;

const RealButton: FC<RealButtonProps> = ({ ...props }) => <button {...props} />;

const hasAnchorProps = (props: any): props is AnchorButtonProps => !!props.href;
const hasButtonProps = (props: any): props is RealButtonProps => !props.href;

const Button: FC<ButtonProps> = ({
	children,
	className,
	hasArrow,
	hasFullWidth,
	variant = 'primary',
	...props
}) => {
	const buttonClassName = cx(
		className,
		'button',
		`${variant}Variant`,
		'is-style-p',
		'animated',
		{
			hasArrow,
			hasFullWidth,
		}
	);

	const arrow = hasArrow && <ArrowIcon className={classes.arrow} />;

	return hasAnchorProps(props) ? (
		<AnchorButton {...props} className={buttonClassName}>
			{children}
			{arrow}
		</AnchorButton>
	) : hasButtonProps(props) ? (
		<RealButton {...props} className={buttonClassName}>
			{children}
			{arrow}
		</RealButton>
	) : null;
};

export default Button;
