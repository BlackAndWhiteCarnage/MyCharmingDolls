/**
 * External dependencies
 */
import { FC, ReactElement, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Slider.module.scss';

type SliderProps = {
	children: Array<ReactElement>;
	className?: string;
} & SwiperProps;

const cx = classnames.bind(classes);

const Slider: FC<SliderProps> = ({ children, className, ...props }) => {
	const [activeIndex, setActiveIndex] = useState<number>();

	return (
		<div className={cx('wrapper', className)}>
			<Swiper
				modules={[Pagination]}
				className={classes.swiperWrapper}
				slidesPerView="auto"
				centeredSlides
				pagination={{
					clickable: true,
				}}
				initialSlide={1}
				onRealIndexChange={(el) => setActiveIndex(el.realIndex)}
				onBeforeInit={(el) => setActiveIndex(el.realIndex)}
				{...props}
			>
				{children.map((item, index) => (
					<SwiperSlide
						className={cx('slide', {
							middleSlide: activeIndex === index,
							rightSlide: activeIndex === index + 1,
							leftSlide: activeIndex === index - 1,
						})}
						key={index}
					>
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
