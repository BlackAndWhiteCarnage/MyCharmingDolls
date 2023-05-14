/**
 * External dependencies
 */
import { FC, useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { canceledContent, getSuccessContent } from '@/config';
import { changeTheme } from '@/utils';
import { Header, Button, Description } from '@/components';
import classes from './SuccessCanceledLayout.module.scss';

type SuccessCanceledLayoutProps = {
	order?: any;
};

const cx = classnames.bind(classes);

const SuccessCanceledLayout: FC<SuccessCanceledLayoutProps> = ({ order }) => {
	useEffect(() => changeTheme(), []);

	const getContent = (title: string, text: string) => (
		<div className={classes.inner}>
			<Header className={cx('title', 'is-style-h2')} title={title} />
			<Description text={text} className={classes.description} />
		</div>
	);

	return (
		<div className={classes.wrapper}>
			{order
				? getContent(
						'Payment Was Successful! 🥳',
						getSuccessContent(
							order.line_items.data[0].description,
							order.line_items.data[0].price.unit_amount,
							order.customer_details.email
						)
				  )
				: getContent('Payment Was Canceled 😭', canceledContent)}
			<div className={classes.buttons}>
				<Button href="/dolls/all">Browse other dolls</Button>
				<Button variant="secondary" href="/">
					Read About Me
				</Button>
			</div>
		</div>
	);
};

export default SuccessCanceledLayout;
