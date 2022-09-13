type TPictures = {
    id: string
    url: string
}

export type TItem = {
    id: string
    title: string
    price: {
        currency: string
        amount: number
        decimals: string
    },
    shipping: true,
    picture: TPictures[] | string
    sold_quantity: number
    description?: string
    link?: string
    state_name?: string
    permalink?: string
}

export type TBreadcrumb = {
    id: string
    name: string
}

export type TListItem = {
    list: TItem[]
    breadcrumbs: TBreadcrumb[]
}

export type TItemDetail = {
    info: TItem
    breadcrumbs: TBreadcrumb[]
}

export type TParam = {
    q?: string
}