const url = process.env.REACT_APP_POST_API_URL;

const postApiClient = {
    getAllPosts: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    setTimeout(() => {
                        resolve(data);
                    }, 5000);
                }).catch(err => {
                    reject("Parsing Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            });
        });
    }
};

export default postApiClient;