class EasyHttp {
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async post(url, data){
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        });

        const postData = await response.json();
        return postData;
    }


    async put(url, data){
        const putResponse = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        });

        const putData = await putResponse.json();
        return putData;
    }

    async delete(url) {
        const del = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type" : "application/json"
            }
        })
        const res = await "Resource deleted";
        return res;
    }
}