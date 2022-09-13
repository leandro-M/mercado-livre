import { api } from 'services/api'
import { TListItem, TItemDetail, TParam } from './types'

export const getItems = async (params: TParam) => {
    const { data } = await api.get<TListItem>('/items', { params })

    return data
}

export const getItemDetail = async (id: string) => {
    const { data } = await api.get<TItemDetail>(`/items/${id}`)

    return data
}