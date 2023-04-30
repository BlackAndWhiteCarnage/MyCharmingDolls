/**
 * External dependencies
 */
import { FC, useEffect, useRef, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import classnames from 'classnames/bind';
import SwiperCore, { Mousewheel, Keyboard } from 'swiper';

/**
 * Internal dependencies
 */
import { Button, Header, ImagesPack, SneakPeek, Info } from '@/elements';
import { changeTheme } from '@/utils';
import { DollsContext } from '@/elements/DollsContextProvider/DollsContextProvider';
import { DollsProps } from '@/pages/dolls/[filter]/[doll]';
import { useUpdateUrl, useFindDollIndex } from '@/hooks';
import classes from './SneakPeekLayout.module.scss';

const cx = classnames.bind(classes);

/**
 * Note that there is an issue with Swiper library
 * That's why I'm not using Swiper history feature
 * https://github.com/nolimits4web/swiper/issues/6265
 */
const SneakPeekLayout: FC<{
	initialSlug?: DollsProps['initialSlug'];
}> = ({ initialSlug }) => {
	const { filteredDolls, loading, error } = useContext(DollsContext);

	const swiperRef = useRef<SwiperCore>();
	const updateUrl = useUpdateUrl();
	const { doll: currentDoll, filter } = useRouter().query;

	const findDollIndex =
		useRef<(slug: string | string[] | undefined) => number>();
	findDollIndex.current = useFindDollIndex();

	useEffect(() => {
		!currentDoll &&
			filteredDolls?.length &&
			updateUrl(
				'replace',
				`/dolls/${filter}/${filteredDolls[0].attributes?.slug}`
			);
	}, [currentDoll, filteredDolls, initialSlug, filter, updateUrl]);

	useEffect(() => {
		findDollIndex.current &&
			currentDoll &&
			filteredDolls &&
			swiperRef.current?.slideTo(
				filteredDolls.findIndex(
					(doll) => doll.attributes!.slug === initialSlug
				)
			);
	}, [currentDoll, filteredDolls, initialSlug]);

	if (!filteredDolls || !filteredDolls.length || loading)
		return <div>Loading...</div>;

	if (error) return <div>Error!</div>;

	console.log(findDollIndex.current(initialSlug));

	return (
		<Swiper
			keyboard={{
				enabled: true,
				onlyInViewport: false,
				pageUpDown: true,
			}}
			speed={1000}
			onSlideChange={(e) => {
				const newUrl = `/dolls/${filter}/${
					e.slides[e.realIndex].dataset.history
				}`;

				swiperRef.current &&
					newUrl !== currentDoll &&
					updateUrl('push', newUrl);
			}}
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
			initialSlide={findDollIndex.current(initialSlug)}
			slidesPerView={1}
			centeredSlides
			onInit={(e) => (swiperRef.current = e)}
		>
			{filteredDolls?.map((data, index) => {
				if (!data.attributes) return null;

				const {
					name,
					description,
					images,
					slug: dollSlug,
					isSold,
					primaryColor,
					secondaryColor,
					backgroundColor,
				} = data.attributes;

				return (
					<SwiperSlide
						key={index}
						className={classes.container}
						data-history={dollSlug}
					>
						{({ isActive, isNext, isPrev }) => {
							isActive &&
								changeTheme(
									primaryColor,
									secondaryColor,
									backgroundColor
								);

							return (
								<div
									data-history={`dolls/${filter}/${dollSlug}`}
									className={cx('wrapper', {
										middleSlide: isActive,
										nextSlide: isNext,
										lastSlide: isPrev,
									})}
								>
									<div className={classes.content}>
										<Header title={`Hi I'm *${name}*`} />
										<SneakPeek text={description} limit />
										<div className={classes.buttons}>
											<Button
												hasArrow
												className={classes.button}
												href={`/doll/${dollSlug}`}
											>
												Read more & meet {name}
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
											images={images.data
												.filter(
													({ attributes }) =>
														attributes?.url
												)
												.slice(0, 3)
												.map(({ attributes }) => ({
													src: attributes?.url || '',
													alt: '',
												}))}
											animate={isActive}
										/>
									</div>
								</div>
							);
						}}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default SneakPeekLayout;
