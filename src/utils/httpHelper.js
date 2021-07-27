import axios from "axios";
const endpoint = "http://localhost:8080";


export function get(url) {
    return axios.get(endpoint + url, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
}
export function getWithAuth(url) {
    const token = localStorage.getItem("TOKEN");
    return axios.get(endpoint + url, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
export function postWithToken(url, body) {
    const token = localStorage.getItem("TOKEN");
    return axios.post(endpoint + url, body, {
        "Access-Control-Allow-Origin": "*",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}

export function postAuth(url, body) {
    return axios.post(endpoint + url, body, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
export function put(url, body) {
    const token = localStorage.getItem("TOKEN");
    return axios.put(endpoint + url, body, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
export function putNoBody(url) {
    const token = localStorage.getItem("TOKEN");
    return axios.put(endpoint + url, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
export function del(url) {
    const token = localStorage.getItem("TOKEN");
    return axios.delete(endpoint + url, {
        "Access-Control-Allow-Origin": "*",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
export function delWithBody(url, body) {
    const token = localStorage.getItem("TOKEN");
    return axios.delete(endpoint + url, body, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
        },
    });
}
