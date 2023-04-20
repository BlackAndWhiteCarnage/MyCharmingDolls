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
import { Button, Header, ImagesPack, SneakPeek, Info } from '@/elements';
import { DefaultProps as ImagesPackProps } from '@/elements/ImagesPack/ImagesPack.stories';
import { ImageData } from '@/types';
import { useDolls } from '@/hooks';
import { useOnResizeCallback } from '@/hooks';
import classes from './SneakPeekLayout.module.scss';

const cx = classnames.bind(classes);

const SneakPeekLayout: FC = () => {
	const [swiper, setSwiper] = useState<SwiperCore | null>(null);

	const { dolls, loading, error } = useDolls();

	useOnResizeCallback(() => swiper?.update());

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error!</div>;
	}

	return (
		<Swiper
			onSwiper={setSwiper}
			keyboard={{
				enabled: true,
				onlyInViewport: false,
				pageUpDown: true,
			}}
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
			{dolls?.map((data, index) => {
				if (!data.attributes) return null;

				const { name, description, images, slug, isSold } =
					data.attributes;

				const getImages = (imagesData: typeof images, count = 3) => {
					const imagesArray: Array<ImageData> = [];

					const imagesDataArray = imagesData.data;

					imagesDataArray.forEach(({ attributes }) => {
						imagesArray.length < count &&
							imagesArray.push({
								src: attributes?.url || '',
								alt: '',
							});
					});

					return imagesArray;
				};

				return (
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
									<Header title={`Hi I'm *${name}*`} />
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
										{!isSold ? (
											<Button
												variant="secondary"
												className={classes.button}
											>
												Adopt her now!
											</Button>
										) : (
											<Info
												label={`${name} is already adopted or reserved!`}
											/>
										)}
									</div>
								</div>
								<div
									id="images-pack-wrapper"
									className={classes.images}
								>
									<ImagesPack
										images={getImages(images)}
										animate={isActive}
									/>
								</div>
							</div>
						)}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default SneakPeekLayout;
