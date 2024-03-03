import axios from "axios";
export async function getAds(filter) {
    try {
        const { data } = await axios.get('/api/ads', {
            // params: { ...filter },
        });
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getId(id) {
    try {
        const { data } = await axios.get(`api/ads/${id}`)
        return data
    } catch (error) {
        throw error
    }
}