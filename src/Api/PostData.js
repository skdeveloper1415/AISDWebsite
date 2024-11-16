
export const PostApiFetching = async (url, payload) => {
    let resp = null
    let loading = true;
    const storedToken = sessionStorage.getItem('AccessToken');
    let bearerToken = storedToken ? storedToken : null;
    let errorMessage = null
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        myHeaders.append("Authorization", `Bearer ${bearerToken}`)
        var requestOptions = {
            method:'POST',
            headers: myHeaders,
            body: payload,  
        };
        const response = await fetch(url, requestOptions)
        const jsonData = await response.json();
        resp = jsonData
        loading = false
    } catch (error) {
        errorMessage = error.message
        loading = false
    }

    let response = { resp, loading, errorMessage }
    return response;
};

// export const PutApiFetching = async (url, payload) => {
//     let resp = null
//     let loading = true;
//     let errorMessage = null
//     try {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type","application/json");
//         myHeaders.append("Authorization", `Bearer ${bearerToken}`)
//         var requestOptions = {
//             method:'PUT',
//             headers: myHeaders,
//             body: payload,  
//         };
//         const response = await fetch(url, requestOptions)
//         const jsonData = await response.json();
//         resp = jsonData
//         loading = false
//     } catch (error) {
//         errorMessage = error.message
//         loading = false
//     }

//     let response = { resp, loading, errorMessage }
//     return response;
// };

export const PutApiFetching = async (url, payload) => {
    let updatedData = null;
    let loading = true;
    let errorMessage = "";

    try {
        const storedToken = sessionStorage.getItem('AccessToken');
        const bearerToken = storedToken ? storedToken : null;

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            body: payload
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        updatedData = jsonData;
        loading = false;
    } catch (error) {
        errorMessage = error.message;
        loading = false;
    }

    return { data: updatedData, loading, errorMessage };
};