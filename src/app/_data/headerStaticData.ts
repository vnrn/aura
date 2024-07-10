
interface INavigation {
    label: string
    href: string
    nested?: INavigation[]
}

export const navigation: INavigation[] = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Categories',
        href: '/categories',
        nested: [
            {
                label: 'Men',
                href: '/categories/men',
                nested: [
                    {
                        label: 'T-Shirts',
                        href: '/categories/men/tshirts'
                    },
                    {
                        label: 'Hoodies',
                        href: '/categories/men/hoodies'
                    },
                    {
                        label: 'Jackets',
                        href: '/categories/men/jackets'
                    }
                ]
            },
            {
                label: 'Women',
                href: '/categories/women',
                nested: [
                    {
                        label: 'Dresses',
                        href: '/categories/women/dresses'
                    },
                    {
                        label: "Tops",
                        href: '/categories/women/tops'
                    },
                    {
                        label: 'Trousers',
                        href: '/categories/women/trousers'
                    }
                ]
            },
            {
                label: "Sales",
                href: '/categories/sales',
                nested: [
                    {
                        label: 'buy 1 get 1 free',
                        href: '/categories/sales/buy1get1free'
                    },
                    {
                        label: 'summer sale',
                        href: '/categories/sales/summersale'
                    }
                ]
            }
        ]
    }
]