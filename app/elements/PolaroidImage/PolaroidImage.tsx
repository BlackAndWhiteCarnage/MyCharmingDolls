/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';
import Image from 'next/image';

/**
 * External dependencies
 */
import { ImageData } from '@/types';
import classes from './PolaroidImage.module.scss';

type PolaroidImageProps = {
	className?: string;
	image: ImageData;
	variant?: 'wide' | 'narrow';
};

const cx = classnames.bind(classes);

const PolaroidImage: FC<PolaroidImageProps> = ({
	className,
	image: { src, alt },
	variant = 'narrow',
}) => (
	<div className={cx('wrapper', className, `${variant}Variant`)}>
		<div className={classes.image}>
			<Image
				src={src}
				alt={alt}
				fill
				placeholder="blur"
				blurDataURL={src}
			/>
		</div>
	</div>
);

export default PolaroidImage;
