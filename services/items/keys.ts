import { QueryKey } from "@tanstack/react-query";
import { TParam } from './types'

export const createUseItems = (params: TParam): QueryKey => [`useItems${params.q}`]

export const createUseItemDetail = (id: string): QueryKey => [`useItemDetail${id}`]
