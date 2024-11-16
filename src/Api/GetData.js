export const GetApiFetching = async (url) => {
    let data =null;
    let loading =true;
    const storedToken = sessionStorage.getItem('AccessToken');
    let bearerToken = storedToken ? storedToken : null;
    let errorMessage =""
    try {
        const response = await fetch(url,{
            method:"post",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
        });
        const jsonData = await response.json();
        data = jsonData
        loading = false
    } catch (error) {
        errorMessage = error.message
        loading = false
    }
    let response = { data, loading, errorMessage }
    return response;
};

export const GetApiFetchingbyid = async (url) => {
    let data =null;
    let loading =true;
    const storedToken = sessionStorage.getItem('AccessToken');
    let bearerToken = storedToken ? storedToken : null;
    let errorMessage =""
    try {
       // const headers = { 'Authorization': `Bearer ${token}` };
        const response = await fetch(url,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            }}
            );
        const jsonData = await response.json();
        data = jsonData
        loading = false
    } catch (error) {
        errorMessage = error.message
        loading = false
    }
    let response = { data, loading, errorMessage }
    return response;
};

