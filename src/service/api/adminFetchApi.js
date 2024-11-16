import axios from 'axios';
import { useRouter } from "next/router";

const adminFetchAPI = async (endpoint, method = 'GET', data = {}, contentType = '') => {
    try {
        const checkEndpoint = endpoint === '/messageboard/posts/list' || endpoint.includes("/messageboard/posts/postdetails") ||  endpoint.includes("/elibrary/document/search/filter")

        const token = sessionStorage.getItem('AccessToken');

        const key = `${method}:${process.env.BASE_URL}${endpoint}`;

        if (adminFetchAPI.pendingRequests[key]) {
            adminFetchAPI.pendingRequests[key].controller.abort();
        }

        const controller = new AbortController();
        const signal = controller.signal;

        adminFetchAPI.pendingRequests[key] = { controller, signal };

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

        delete adminFetchAPI.pendingRequests[key];

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

adminFetchAPI.pendingRequests = {};

export default adminFetchAPI;

// OLD CODE FOR BACK-UP
// import axios from 'axios';
// import { useRouter } from "next/router";

// const adminFetchAPI = async (endpoint, method = 'GET', data = {}, contentType = '') => {
//     try {
//         const checkEndpoint = endpoint === '/messageboard/posts/list' || endpoint.includes("/messageboard/posts/postdetails") ||  endpoint.includes("/elibrary/document/search/filter")

//         const token = sessionStorage.getItem('AccessToken');
//         let response = {};
//         response = await axios({
//             method: method,
//             url: process.env.BASE_URL + endpoint,
//             data: data,
//             headers: {
//                 Authorization: checkEndpoint ? `Bearer ${process.env.STATIC_TOKEN}` : `Bearer ${token}`,
//                 "Content-Type": contentType
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.status === 401) {
//             // Redirect to login page
//             const router = useRouter();
//             await router.push('/');
//             return;
//         } else {
//             console.log('Error fetching API data:', error);
//             return error?.response
//         }

//         // throw error;
//     }
// };
// export default adminFetchAPI

