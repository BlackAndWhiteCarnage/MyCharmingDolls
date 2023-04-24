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
import { DollsProps } from '@/pages/dolls/[doll]';
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
	const { dolls, loading, error } = useContext(DollsContext);

	const swiperRef = useRef<SwiperCore>();
	const updateUrl = useUpdateUrl();
	const { doll: currentUrl } = useRouter().query;

	const findDollIndex =
		useRef<(slug: string | string[] | undefined) => number>();
	findDollIndex.current = useFindDollIndex();

	useEffect(() => {
		if (findDollIndex.current) {
			const slugFromUrl = window.location.pathname.split('/').pop();

			slugFromUrl &&
				swiperRef.current?.slideTo(findDollIndex.current(slugFromUrl));
		}
	}, [currentUrl]);

	if (dolls.length <= 0 || loading) return <div>Loading...</div>;

	if (error) return <div>Error!</div>;

	return (
		<Swiper
			keyboard={{
				enabled: true,
				onlyInViewport: false,
				pageUpDown: true,
			}}
			speed={1000}
			onSlideChange={(e) => {
				const newUrl = `/dolls/${
					e.slides[e.realIndex].dataset.history
				}`;

				swiperRef.current &&
					newUrl !== currentUrl &&
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
			onInit={(instance) => {
				swiperRef.current = instance;

				typeof initialSlug !== 'string' &&
					updateUrl('replace', `/dolls/${dolls[0].attributes!.slug}`);
			}}
		>
			{dolls?.map((data, index) => {
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
									data-history={`dolls/${dollSlug}`}
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
