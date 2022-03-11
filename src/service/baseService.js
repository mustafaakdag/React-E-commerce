import { config } from "../env/config"


export const baseService = {

    getAll: async (url) => {

        let responseData = []

       await fetch(config.apiurl + url)
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            })
        

        return responseData;
    },
    getById: async(url, id) => {
        let responseData = {};

        await fetch(config.apiurl + url + '/' + id)
        .then(res => res.json())
        .then((data) => {
            responseData = data;
            return responseData;
        })

        
    },
    add : async(url,data) => {

        let responseData = {};

        let requestOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        await fetch(config.apiurl + url, requestOptions)
        .then(res => res.json())
        .then((data) => {
    
            return data;
        })
        
    },
    delete: async(url,id) => {

        let responseData = {};

        let requestOptions = {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        }
        
        await fetch(config.apiurl + url + '/' + id, requestOptions)
        .then(res => res.json())
        .then((data) => {
            responseData = data;
            return responseData;
        })

    }
}


