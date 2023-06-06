import { useEffect, useState } from "react";
import axios from "axios";

// USAGE
// const { data = dataInfo, loading, error, refetch } = useFetch(url);
// console.log(data);

function useFetch(url) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    url = import.meta.env.VITE_SOCIAL_EMBED_API + url;

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default useFetch;
