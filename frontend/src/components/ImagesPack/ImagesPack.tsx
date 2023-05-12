/**
 * External dependencies
 */
import { FC, useState, RefObject } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { useOnResizeCallback } from '@/hooks';
import { PolaroidImage } from '@/components';
import { ImageData } from '@/types';
import classes from './ImagesPack.module.scss';

type ImagesPackProps = {
	animate?: boolean;
	images: Array<ImageData>;
	parentRef: RefObject<HTMLDivElement>;
};

const cx = classnames.bind(classes);

const ImagesPack: FC<ImagesPackProps> = ({ animate, images, parentRef }) => {
	const [scale, setScale] = useState(1);

	useOnResizeCallback(() => {
		const parent = parentRef.current;

		parent &&
			setScale(
				Math.min(parent.offsetWidth / 1000, parent.offsetHeight / 1000)
			);
	}, true);

	return (
		<div
			className={cx('wrapper', {
				animate: animate && scale,
			})}
			style={{
				'--scale': scale,
			}}
		>
			{images.map((image, index) => (
				<PolaroidImage
					key={`${image.src}-${index}`}
					image={image}
					className={cx('image', `image-number-${index + 1}`)}
				/>
			))}
		</div>
	);
};

export default ImagesPack;
