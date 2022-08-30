import { createAsyncThunk } from '@reduxjs/toolkit'
import { ISneakers } from '../../models/models'
import axios from 'axios'

export interface ParamsSnk {
    currentPage: number,
    sort:string,
    order:string
}

export const fetchSneakers = createAsyncThunk<ISneakers[],ParamsSnk>(
    'sneakers/fetchSneakersStatus',
    async (params) => {
        const { currentPage, sort, order } = params
        const {data} = await axios.get<ISneakers[]>(`https://62f15dca25d9e8a2e7cb4762.mockapi.io/items?page=${currentPage}&sortBy=${sort}&order=${order}`);
        return data as ISneakers[]
    }
)

interface ParamsFull {
    id: string | undefined,
}

export const fetchFullSnk = createAsyncThunk<ISneakers,ParamsFull>(
    'full/fetchFullStatus',
    async (params) => {
        const { id } = params
        const {data} = await axios.get<ISneakers>(`https://62f15dca25d9e8a2e7cb4762.mockapi.io/items/${id}`);
        return data as ISneakers
    }
)