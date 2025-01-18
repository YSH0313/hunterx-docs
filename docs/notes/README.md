---
title: 从这里开始
icon: carbon:idea
createTime: 2025/01/11 16:41:54
permalink: /guide/
---

<NpmBadgeGroup repo="YSH0313/HunterX">
  <span class="vp-npm-badge">
    <a href="https://www.python.org/" target="_blank" rel="noreferrer" class="no-icon">
      <img alt="Static Badge" src="https://img.shields.io/badge/build-%3E%3D3.11-brightgreen?logo=python&logoColor=appveyor&logoSize=violet&label=python&labelColor=abcdef&color=blue&cacheSeconds=3600">
    </a>
  </span>
  <NpmBadge type="stars" />
  <NpmBadge type="forks" />
  <span class="vp-npm-badge">
    <a href="https://github.com/YSH0313/HunterX/releases" target="_blank" rel="noreferrer" class="no-icon">
      <img alt="GitHub Downloads (all assets, all releases)" src="https://img.shields.io/github/downloads/YSH0313/HunterX/total?logo=semanticrelease&logoColor=violet&logoSize=auto&label=release&labelColor=abcdef&color=fedcba&cacheSeconds=3600&link=https%3A%2F%2Fgithub.com%2FYSH0313%2FHunterX%2Freleases">
    </a>
  </span>
  <span class="vp-npm-badge">
    <a href="https://pepy.tech/projects/hunterx?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=daily&viewType=chart&versions=0.1.2%2C0.1.1" target="_blank" rel="noreferrer" class="no-icon">
      <img alt="Pepy Total Downloads" src="https://img.shields.io/pepy/dt/hunterx?color=blue&cacheSeconds=3600&link=https%3A%2F%2Fpepy.tech%2Fprojects%2Fhunterx%3FtimeRange%3DthreeMonths%26category%3Dversion%26includeCIDownloads%3Dtrue%26granularity%3Ddaily%26viewType%3Dchart%26versions%3D0.1.2%252C0.1.1">
    </a>
  </span>
  <NpmBadge type="license" />
  <NpmBadge type="source" />
</NpmBadgeGroup>

本部分将指导您快速上手使用 `HunterX` 框架，并帮助您了解如何通过简单的步骤开始您的爬虫项目。无论您是框架的新手还是有经验的开发者，按照以下步骤，您将能够迅速搭建并运行您的第一个爬虫任务。

:::: card-masonry

::: card title="异步" icon="logos:async-api-icon"
非阻塞的方式高效调度爬虫任务，提升单机对高延迟网络请求的处理能力
:::

::: card title="并发" icon="flat-color-icons:process"
通过事件循环和任务调度实现多任务同时运行，提高爬取速度和资源利用率
:::

::: card title="分布式" icon="logos:linode"
支持将爬虫任务分发到多个节点协同执行，适用于大规模爬取场景，实现更高的吞吐量和更快的数据抓取速度
:::

::: card title="开箱即用" icon="icon-park:click"
框架支持零配置即刻使用，同时也提供丰富的自定义配置选项，满足不同需求的灵活扩展
:::

::: card title="优先级队列" icon="flat-color-icons:workflow"
按优先级顺序处理任务的队列，确保高优先级任务优先执行
:::

::: card title="断点续爬" icon="icon-park:playback-progress"
在爬取过程中保存进度，支持中断后从上次断点继续
:::

::: card title="中间件" icon="catppuccin:folder-middleware"
作为应用程序与底层服务之间的中介层，处理请求、响应、认证等跨领域功能的模块
:::

::: card title="数据库 ORM" icon="icon-park:form"
通过对象映射简化数据库操作，使开发者能通过对象而非 SQL 进行数据管理
:::

::: card title="工具库" icon="catppuccin:folder-functions"
一组常用的、封装好的功能模块或函数库，旨在简化开发过程，提高代码重用性和效率
:::

::::
