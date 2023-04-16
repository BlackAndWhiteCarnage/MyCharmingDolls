/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { PolaroidImage } from '@/elements';
import { ImageData } from '@/types';
import classes from './ImagesPack.module.scss';

type ImagesPackProps = {
	animate?: boolean;
	images: Array<ImageData>;
};

const cx = classnames.bind(classes);

const ImagesPack: FC<ImagesPackProps> = ({ animate, images }) => (
	<div
		className={cx('wrapper', {
			animate,
		})}
	>
		<div className={classes.inner}>
			{images.map((image, index) => (
				<PolaroidImage
					key={`${image.src}-${index}`}
					image={image}
					className={cx('image', `image-number-${index + 1}`)}
				/>
			))}
		</div>
	</div>
	// <div className={classes.container}>
	// 	<div className={classes.elm1}>1</div>
	// 	<div className={classes.elm2}>2</div>
	// </div>
);

export default ImagesPack;
