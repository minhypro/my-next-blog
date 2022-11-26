import axiosClient from '../axios/axiosClient';

export default async function fetcher (url: string) {
    const result = await axiosClient.get(url)
    return result.data
}