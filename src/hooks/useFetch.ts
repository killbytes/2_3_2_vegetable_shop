import {useEffect, useState} from "react";

type UseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

export function useFetch<T>(request: () => Promise<T>): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const result = await request();
                if (!ignore) {
                    setData(result);
                }
            } catch (error) {
                if (!ignore) {
                    if (error instanceof Error) {
                        setError(error.message);
                    } else {
                        setError("Unknown error");
                    }
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, [request]);

    return {
        data,
        loading,
        error,
    };
}