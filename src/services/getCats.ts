import axios from "axios";
import { ICat } from "../models/ICat";

const apiBaseUrl = 'https://cataas.com/api'

export const getCats = async (startingPage: number): Promise<ICat[]> => {
    let cats: ICat[] = [];

    try {
        const { data } = await axios
            .get(`${apiBaseUrl}/cats?skip=${startingPage}&limit=${startingPage + 10}`);

        cats = data;
    } catch (error) {
        console.error('Could not retrieve cats')
    } finally {
        return cats;
    }
};