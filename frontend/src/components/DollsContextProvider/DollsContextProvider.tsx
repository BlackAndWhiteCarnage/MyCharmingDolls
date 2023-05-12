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
	setFilteredDolls: Dispatch<SetStateAction<Array<DollEntity>>>;
};

export const DollsContext = createContext<DollsContextType>({
	dolls: [],
	filteredDolls: [],
	setFilteredDolls: () => {},
	loading: true,
	error: undefined,
});

const DollsContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const { dolls: dollsData, loading, error } = useDolls();

	const [dolls, setDolls] = useState<Dolls>([]);
	const [filteredDolls, setFilteredDolls] = useState<Dolls>([]);

	useEffect(() => setDolls(dollsData as Dolls), [dollsData]);

	return (
		<DollsContext.Provider
			value={{
				filteredDolls,
				dolls,
				setFilteredDolls,
				loading,
				error,
			}}
		>
			{children}
		</DollsContext.Provider>
	);
};

export default DollsContextProvider;
