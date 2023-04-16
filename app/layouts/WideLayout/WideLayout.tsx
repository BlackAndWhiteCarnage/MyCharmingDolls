/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { DefaultProps as SliderProps } from '@/elements/Slider/Slider.stories';
import classes from './WideLayout.module.scss';
import { Slider, Header, AccordionItem, List, Button } from '@/elements';
import PriceBox from '@/elements/PriceBox/PriceBox';

const cx = classnames.bind(classes);

const WideLayout: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.slider}>
			<Slider {...SliderProps} />
		</div>
		<div className={classes.inner}>
			<div className={classes.content}>
				<Header title="Hi im *Nora*" />
				<article className={classes.text}>
					<p className={cx('textBlock', 'is-style-p')}>
						your worst nightmare, said the dark and creepy doll, as
						she sat in the dusty corner of the antique shop.
					</p>
					<p className={cx('textBlock', 'is-style-p')}>
						Nora had been sitting there for years, waiting for
						someone to take her home. She had a long and tragic
						history - she was crafted by a reclusive toy maker who
						poured all of his love and madness into creating the
						perfect doll. But the toy maker died suddenly, leaving
						Nora alone in the dusty old house.
					</p>
					<p className={cx('textBlock', 'is-style-p')}>
						Nora had been passed from one owner to another, but
						nobody seemed to want her. They were all afraid of her
						eerie personality and gothic attire. Nora longed for a
						new owner who would appreciate her unique beauty and
						embrace her dark side.
					</p>
					<p className={cx('textBlock', 'is-style-p')}>
						But as the years passed, Nora began to lose hope. She
						watched as other toys were sold and taken to new homes,
						while she remained in the corner - forgotten and alone.
					</p>
					<p className={cx('textBlock', 'is-style-p')}>
						And yet, Nora refused to give up. She knew that
						somewhere out there, there was someone who would see
						past her eerie appearance and love her for who she was.
					</p>
					<p className={cx('textBlock', 'is-style-p')}>
						And now she's searching for a new owner - someone who
						will give her a new home and a new purpose. Someone who
						will love her and cherish her, no matter how dark and
						creepy she may seem. And she knows that one day, that
						person will come along and take her home.
					</p>
				</article>
				<div className={classes.accordions}>
					<AccordionItem
						label="The work done includes"
						open
						onToggle={() => {}}
					>
						<List
							listItems={[
								'carving lips, nose & cheeks',
								'new makeup done with (dry pastels, watercolor pencils, fixing varnish)',
								'painted eyelids',
								'new eyes',
								'new lashes',
								'sleep eyes',
								'new pull-strings decorated with beads',
								'washed and styled hair',
								'my signature & her name on the back of head',
							]}
						/>
					</AccordionItem>
					<AccordionItem
						label="The doll is sold with"
						onToggle={() => {}}
					>
						<List
							listItems={[
								'carving lips, nose & cheeks',
								'new makeup done with (dry pastels, watercolor pencils, fixing varnish)',
								'painted eyelids',
								'new eyes',
								'new lashes',
								'sleep eyes',
								'new pull-strings decorated with beads',
								'washed and styled hair',
								'my signature & her name on the back of head',
							]}
						/>
					</AccordionItem>
					<AccordionItem label="Free extras" onToggle={() => {}}>
						<List
							listItems={[
								'carving lips, nose & cheeks',
								'new makeup done with (dry pastels, watercolor pencils, fixing varnish)',
								'painted eyelids',
								'new eyes',
								'new lashes',
								'sleep eyes',
								'new pull-strings decorated with beads',
								'washed and styled hair',
								'my signature & her name on the back of head',
							]}
						/>
					</AccordionItem>
					<AccordionItem
						label="Other informations"
						onToggle={() => {}}
					>
						<List
							listItems={[
								'carving lips, nose & cheeks',
								'new makeup done with (dry pastels, watercolor pencils, fixing varnish)',
								'painted eyelids',
								'new eyes',
								'new lashes',
								'sleep eyes',
								'new pull-strings decorated with beads',
								'washed and styled hair',
								'my signature & her name on the back of head',
							]}
						/>
					</AccordionItem>
				</div>
			</div>
			<div className={classes.sticky}>
				<PriceBox productPrice={3000} />
				<Button>Adopt now!</Button>
				<Button variant="secondary">Browse other dolls</Button>
			</div>
		</div>
	</div>
);

export default WideLayout;
