/**
 * External dependencies
 */
import {
	FC,
	PropsWithChildren,
	createContext,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react';
import { useRouter } from 'next/router';
import { ApolloError } from '@apollo/client';

/**
 * Internal dependencies
 */
import { DollEntity } from '@/generated/graphql';
import { useDolls } from '@/hooks';

type Dolls = Array<DollEntity>;

type DollsContextType = {
	dolls: Array<DollEntity>;
	filteredDolls: Array<DollEntity> | undefined;
	error: ApolloError | undefined;
	loading: boolean;
	setDolls: Dispatch<SetStateAction<Array<DollEntity>>>;
};

export const DollsContext = createContext<DollsContextType>({
	dolls: [],
	filteredDolls: [],
	setDolls: () => {},
	loading: true,
	error: undefined,
});

const DollsContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const { filter } = useRouter().query;

	const { dolls: dollsData, loading, error } = useDolls();

	const [dolls, setDolls] = useState<Dolls>([]);
	const [filteredDolls, setFilteredDolls] = useState<Dolls>();

	useEffect(() => setDolls(dollsData as Dolls), [dollsData]);

	useEffect(
		() =>
			setFilteredDolls(
				dollsData?.filter(
					({ attributes }) =>
						(filter === 'adopted' && attributes?.isSold) ||
						(filter === 'not-adopted' && !attributes?.isSold) ||
						filter === 'all'
				) as Dolls
			),
		[dollsData, filter]
	);

	return (
		<DollsContext.Provider
			value={{
				filteredDolls,
				dolls,
				setDolls,
				loading,
				error,
			}}
		>
			{children}
		</DollsContext.Provider>
	);
};

export default DollsContextProvider;
