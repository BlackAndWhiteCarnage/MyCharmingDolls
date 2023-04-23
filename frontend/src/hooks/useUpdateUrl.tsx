import { useRouter } from 'next/router';

const useUpdateUrl = () => {
	const router = useRouter();

	return (type: 'push' | 'replace', url: string) =>
		router[type === 'push' ? 'push' : 'replace']({ pathname: url });
};

export default useUpdateUrl;
