/**
 * External dependencies
 */
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, Keyboard } from 'swiper';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { useOnResizeCallback } from '@/hooks';
import { Button, Header, ImagesPack, SneakPeek } from '@/elements';
import { DefaultProps as ImagesPackProps } from '@/elements/ImagesPack/ImagesPack.stories';
import classes from './SneakPeekLayout.module.scss';

const cx = classnames.bind(classes);

const SneakPeekLayout: FC = () => {
	const items = new Array(9).fill(ImagesPackProps);
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);

	useOnResizeCallback(() => swiper?.update());

	return (
		<Swiper
			onSwiper={setSwiper}
			keyboard={{
				enabled: true,
				onlyInViewport: false,
				pageUpDown: true,
			}}
			loop
			speed={1000}
			modules={[Mousewheel, Keyboard]}
			className={classes.swiper}
			mousewheel
			touchEventsTarget="container"
			breakpoints={{
				1220: {
					direction: 'vertical',
				},
			}}
			autoHeight
			slidesPerView={1}
			centeredSlides
			initialSlide={1}
		>
			{items.map((props, index) => (
				<SwiperSlide key={index} className={classes.container}>
					{({ isActive, isNext, isPrev }) => (
						<div
							className={cx('wrapper', {
								middleSlide: isActive,
								nextSlide: isNext,
								lastSlide: isPrev,
							})}
						>
							<div className={classes.content}>
								<Header title="Hi I'm *Nora*" />
								<SneakPeek
									textBlocks={[
										'your worst nightmare, said the dark and creepy doll, as she sat in the dusty corner of the antique shop.',
										'Nora had been sitting there for years, waiting for someone to take her home. She had a long and tragic history - she was crafted by a reclusive toy maker who poured all of his love and madness into creating the perfect doll. But the toy maker died suddenly, leaving Nora alone in the dusty old house...',
									]}
								/>
								<div className={classes.buttons}>
									<Button
										hasArrow
										className={classes.button}
										href="/doll"
									>
										Read more & meet Nora
									</Button>
									<Button
										variant="secondary"
										className={classes.button}
									>
										Adopt her now!
									</Button>
								</div>
							</div>
							<div
								id="images-pack-wrapper"
								className={classes.images}
							>
								<ImagesPack {...props} animate={isActive} />
							</div>
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SneakPeekLayout;
