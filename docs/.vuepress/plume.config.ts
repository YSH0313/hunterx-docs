import {defineThemeConfig} from 'vuepress-theme-plume'
import {enNavbar, zhNavbar} from './navbar'
import {enNotes, zhNotes} from './notes'
import path from "node:path";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/hunterx.png',

    appearance: true,  // 配置 深色模式

    social: [
        {icon: 'github', link: 'https://github.com/YSH0313/HunterX'},
        {icon: 'qq', link: 'https://qm.qq.com/q/GNqAR1Ty8e'},
        {
            icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"/></path></g></svg>',
                name: 'email'
            }, link: 'mailto:ysh17600824539@gmail.com'
        },
    ],

    navbarSocialInclude: ['github', 'qq', 'email'], // 允许显示在导航栏的 social 社交链接
    // aside: true, // 页内侧边栏， 默认显示在右侧
    // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    copyright: true,

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚 */
    footer: {
        message: '',
        copyright: 'Copyright © 2024-present yuanshaohang',
    },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    // transition: {
    //   page: true,        // 启用 页面间跳转过渡动画
    //   postList: true,    // 启用 博客文章列表过渡动画
    //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    // },

    locales: {
        '/': {
            /**
             * @see https://theme-plume.vuejs.press/config/basic/#profile
             */
            profile: {
                avatar: '/hunterx.png',
                name: 'HunterX 文档',
                description: 'HunterX 使用文档',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: zhNavbar,
            notes: zhNotes,

            /**
             * 公告板
             * @see https://theme-plume.vuejs.press/guide/features/bulletin/
             */
            bulletin: {
                layout: 'bottom-right',
                lifetime: 'always',
                title: '🎉 公告 🎉',
                contentFile: path.join(__dirname, 'bulletin.md'),
            },
        },
        '/en/': {
            /**
             * @see https://theme-plume.vuejs.press/config/basic/#profile
             */
            profile: {
                avatar: '/hunterx.png',
                name: 'HunterX Docs',
                description: 'HunterX 使用文档',
                // circle: true,
                // location: '',
                // organization: '',
            },

            navbar: enNavbar,
            notes: enNotes,

            /**
             * 公告板
             * @see https://theme-plume.vuejs.press/guide/features/bulletin/
             */
            // bulletin: {
            //   layout: 'bottom-right',
            //   lifetime: 'always',
            //   title: '🎉 公告 🎉',
            //   contentFile: path.join(__dirname, 'bulletin-en.md'),
            // },
        },
    },

    bulletin: {
        layout: 'bottom-right',
        lifetime: 'always',
        title: '🎉 公告 🎉',
        contentFile: path.join(__dirname, 'bulletin.md'),
    },
})
