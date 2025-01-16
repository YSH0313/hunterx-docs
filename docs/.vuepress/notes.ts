import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhGuide = defineNoteConfig({
    dir: 'guide/',
    link: '/guide/',
    // sidebar: 'auto'
    sidebar: [
        {
            text: '从这里开始',
            collapsed: false,
            icon: 'streamline:startup',
            prefix: '1.start/',
            items: 'auto'
        },
        {
            text: '使用说明',
            collapsed: false,
            icon: 'carbon:transform-instructions',
            prefix: '2.use/',
            items: 'auto',
        },
        {
            text: '功能讲解',
            collapsed: false,
            icon: 'carbon:tool-box',
            prefix: '3.function/',
            items: 'auto',
        },
        {
            text: '架构原理',
            icon: 'wpf:faq',
            link: '4.framework.md'
        },
        {
            text: '更新计划',
            icon: 'ic:outline-tips-and-updates',
            link: '5.update-plan.md'
        },
        {
            text: '常见问题（FAQ）',
            icon: 'wpf:faq',
            link: '6.faq.md'
        },
    ]
})

export const zhNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [zhGuide],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
    dir: 'demo',
    link: '/demo',
    sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
    dir: 'en/notes',
    link: '/en/',
    notes: [enDemoNote],
})

