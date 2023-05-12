/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { AtroposWrapper } from '@/components';
import classes from './Slider.module.scss';

type SliderProps = {
	children: Array<ReactElement>;
	className?: string;
} & SwiperProps;

const cx = classnames.bind(classes);

const Slider: FC<SliderProps> = ({ children, className, ...props }) => (
	<AtroposWrapper
		rotateYMax={6}
		rotateXMax={6}
		className={cx('wrapper', className)}
	>
		<Swiper
			className={classes.swiperWrapper}
			slidesPerView="auto"
			centeredSlides
			initialSlide={1}
			slideToClickedSlide
			{...props}
		>
			{children.map((item, index) => (
				<SwiperSlide key={index} className={classes.slideWrapper}>
					{({ isActive, isNext, isPrev }) => (
						<div
							className={cx('slide', {
								isActive,
								isNext,
								isPrev,
							})}
						>
							{item}
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	</AtroposWrapper>
);

export default Slider;
