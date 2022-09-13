import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { createUseItems, createUseItemDetail } from './keys'
import { TListItem, TItemDetail, TParam } from './types'
import { getItems, getItemDetail } from './action'

export const useItems = (params: TParam, options?: UseQueryOptions<TListItem>) => {
  return useQuery(createUseItems(params), () => getItems(params), options)
}

export const useItemDetail = (id: string, options?: UseQueryOptions<TItemDetail>) => {
  return useQuery(createUseItemDetail(id), () => getItemDetail(id), options)
}
