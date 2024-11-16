export const deleteApiFetching = async (url) => {
    let resp = null;
    let loading = true;
    let errorMessage = null;
    const storedToken = sessionStorage.getItem('AccessToken');
    let bearerToken = storedToken ? storedToken : null;
    try {
        var myHeaders = new Headers();
        // Add bearer token if provided
       
            myHeaders.append("Authorization", `Bearer ${bearerToken}`);
        

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
        };

        const response = await fetch(url, requestOptions);
        if (response.status === 204) {
            // Status 204 means successful deletion with no content
            resp = { message: 'Deleted successfully' };
        } else {
            const jsonData = await response.json();
            resp = jsonData;
        }

        loading = false;
    } catch (error) {
        errorMessage = error.message;
        loading = false;
    }

    let result = { resp, loading, errorMessage };
    return result;
};