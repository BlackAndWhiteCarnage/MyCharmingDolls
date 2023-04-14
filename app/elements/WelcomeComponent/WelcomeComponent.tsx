/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';

/**
 * External dependencies
 */
import { SVGIcon } from '@/types';
import classes from './WelcomeComponent.module.scss';

type WelcomeComponentProps = {
	description?: string;
	image: string;
	theme?: 'light' | 'dark';
	title: string;
	icon: SVGIcon;
};

const cx = classnames.bind(classes);

const WelcomeComponent: FC<WelcomeComponentProps> = ({
	description,
	image,
	theme = 'light',
	title,
	icon: Icon,
}) => (
	<div className={cx('wrapper', `theme-${theme}`)}>
		<Icon className={classes.icon} />
		<div className={classes.image}>
			<Image
				src={image}
				alt=""
				fill
				quality={1}
				placeholder="blur"
				blurDataURL={image}
			/>
		</div>
		<h1 className={cx('title', 'is-style-example')}>{title}</h1>
		{description && <p className={classes.description}>{description}</p>}
	</div>
);

export default WelcomeComponent;
