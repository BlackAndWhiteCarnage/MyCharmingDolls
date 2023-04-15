/**
 * External dependencies
 */
import {
	cloneElement,
	FC,
	PropsWithChildren,
	ReactElement,
	useState,
} from 'react';
import { BasePlacement } from '@popperjs/core/lib';
import { usePopper } from 'react-popper';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Portal } from '@/elements';
import { useClickOutside } from '@/hooks';
import classes from './Popover.module.scss';

type PopoverProps = PropsWithChildren<{
	button: ReactElement;
	placement?: BasePlacement;
	alwaysClose?: boolean;
}>;

const cx = classnames.bind(classes);

const Popover: FC<PopoverProps> = ({
	button,
	children,
	placement = 'bottom',
}) => {
	const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
	const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

	const [isOpen, setIsOpen] = useState(false);

	useClickOutside(popperRef, () => setIsOpen(false), 'popup-element');

	const { styles, attributes, update } = usePopper(buttonRef, popperRef, {
		placement,
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 12],
				},
			},
			{
				name: 'preventOverflow',
				options: {
					padding: 15,
					tether: false,
				},
			},
		],
	});

	return (
		<>
			{cloneElement(button, {
				onClick: () => {
					setIsOpen(!isOpen);
					update?.();
				},
				ref: setButtonRef,
			})}
			<Portal>
				<div
					className={cx('popover', {
						isOpen,
					})}
					ref={setPopperRef}
					style={styles.popper}
					{...attributes.popper}
				>
					{children}
				</div>
			</Portal>
		</>
	);
};

export default Popover;
