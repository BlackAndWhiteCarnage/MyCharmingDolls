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

type DollsContextType = {
	dolls: Array<DollEntity>;
	error: ApolloError | undefined;
	loading: boolean;
	setDolls: Dispatch<SetStateAction<Array<DollEntity>>>;
};

export const DollsContext = createContext<DollsContextType>({
	dolls: [],
	setDolls: () => {},
	loading: true,
	error: undefined,
});

const DollsContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const { dolls: dollsData, loading, error } = useDolls();

	const [dolls, setDolls] = useState<Array<DollEntity>>([]);

	useEffect(() => {
		setDolls(dollsData as Array<DollEntity>);
	}, [dollsData]);

	if (!dolls) {
		return <div>Loading...</div>;
	}

	return (
		<DollsContext.Provider
			value={{
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
