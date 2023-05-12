/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import { Pagination } from 'swiper';
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

const Slider: FC<SliderProps> = ({ children, className, ...props }) => {
	return (
		<div className={cx('wrapper', className)}>
			<AtroposWrapper
				rotateYMax={6}
				rotateXMax={6}
				className={classes.innerWrap}
			>
				<Swiper
					modules={[Pagination]}
					className={classes.swiperWrapper}
					slidesPerView="auto"
					centeredSlides
					pagination={{
						clickable: true,
					}}
					initialSlide={1}
					slideToClickedSlide
					{...props}
				>
					{children.map((item, index) => (
						<SwiperSlide
							key={index}
							className={classes.slideWrapper}
						>
							{({ isActive, isNext, isPrev }) => (
								<div
									className={cx('slide', {
										middleSlide: isActive,
										rightSlide: isNext,
										leftSlide: isPrev,
									})}
								>
									{item}
								</div>
							)}
						</SwiperSlide>
					))}
				</Swiper>
			</AtroposWrapper>
		</div>
	);
};

export default Slider;
