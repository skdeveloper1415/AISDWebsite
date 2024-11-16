import axios from 'axios';
import { useRouter } from "next/router";

const fetchAPI = async (endpoint, method = 'GET', data = {}, contentType = '') => {
    try {
        const checkEndpoint = endpoint === '/messageboard/posts/list' || endpoint === '/messageboard/posts/topcontibotor' || endpoint === '/messageboard/posts/unansweredtopics' || endpoint === '/messageboard/posts/relatedTopics' || endpoint.includes('/messageboard/posts/postdetails')

        const token = sessionStorage.getItem('AccessToken');

        const key = `${method}:${process.env.BASE_URL}${endpoint}`;

        if (fetchAPI.pendingRequests[key]) {
            fetchAPI.pendingRequests[key].controller.abort();
        }

        const controller = new AbortController();
        const signal = controller.signal;

        fetchAPI.pendingRequests[key] = { controller, signal };

        let response = await axios({
            method: method,
            url: process.env.BASE_URL + endpoint,
            data: data,
            headers: {
                Authorization: checkEndpoint ? `Bearer ${process.env.STATIC_TOKEN}` : `Bearer ${token}`,
                "Content-Type": contentType
            },
            signal: signal,
        });

        delete fetchAPI.pendingRequests[key];

        return response.data;
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log('Duplicate request aborted:', error.message);
            return;
        }

        if (error.response && error.response.status === 401) {
            // Redirect to login page
            const router = useRouter();
            await router.push('/');
            return;
        } else {
            console.log('Error fetching API data:', error);
            return error?.response;
        }
    }
};

fetchAPI.pendingRequests = {};

export default fetchAPI;
