import {defineNavbarConfig} from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const zhNavbar = defineNavbarConfig([
    {text: '首页', icon: 'line-md:home', link: '/'},
    {text: '指南', icon: 'icon-park-outline:guide-board', link: '/guide/'},
    {text: '博客', icon: 'hugeicons:quill-write-02', link: '/blog/'},
    {
        text: `${version}`,
        icon: 'system-uicons:versions',
        items: [
            {text: '更新记录', link: '/changelog/'},
        ],
    },
])

export const enNavbar = defineNavbarConfig([
    {text: 'Home', icon: 'line-md:home', link: '/en/'},
    {text: 'Demo', icon: 'icon-park-outline:guide-board', link: '/en/notes/demo/README.md'},
    {text: 'Blog', icon: 'hugeicons:quill-write-02', link: '/en/blog/'}
])

