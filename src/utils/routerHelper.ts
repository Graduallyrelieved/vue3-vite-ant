
/* Layout */
export const Layout = () => import('@/layout/index.vue')

export const getParentLayout = () => {
    return () =>
        new Promise((resolve) => {
            resolve({
                name: 'ParentLayout',
            })
        })
}


