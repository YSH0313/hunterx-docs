import{_ as i,c as d,d as t,a as s,b as p,f as l,r as a,o as r}from"./app-B3GkPK4x.js";const m={},y={class:"vp-file-tree"},c={class:"tree-node folder"},f={class:"tree-node folder"},u={class:"tree-node file"},g={class:"tree-node file"},x={class:"tree-node file"},v={class:"tree-node file"},_={class:"tree-node file"},h={class:"tree-node file"},T={class:"tree-node file"},b={class:"tree-node file"};function w(j,e){const n=a("VPIcon"),o=a("FileTreeItem");return r(),d("div",null,[e[18]||(e[18]=t("h2",{id:"项目结构",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#项目结构"},[t("span",null,"项目结构")])],-1)),t("div",y,[t("ul",null,[s(o,{type:"folder",expanded:!0,empty:!1},{default:p(()=>[t("span",c,[s(n,{name:"vscode-icons:default-folder"}),e[0]||(e[0]=t("span",{class:"name"},"my_project",-1)),e[1]||(e[1]=t("span",{class:"comment"},"# 项目根目录（你的项目名称）",-1))]),t("ul",null,[s(o,{type:"folder",expanded:!0,empty:!1},{default:p(()=>[t("span",f,[s(n,{name:"vscode-icons:default-folder"}),e[2]||(e[2]=t("span",{class:"name"},"spiders",-1)),e[3]||(e[3]=t("span",{class:"comment"},"# 爬虫文件目录",-1))]),t("ul",null,[s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",u,[s(n,{name:"vscode-icons:file-type-python"}),e[4]||(e[4]=t("span",{class:"name"},"__init__.py",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",g,[s(n,{name:"vscode-icons:file-type-python"}),e[5]||(e[5]=t("span",{class:"name"},"first_spider.py",-1)),e[6]||(e[6]=t("span",{class:"comment"},"# 爬虫文件（你的爬虫文件名称）",-1))])]),_:1})])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",x,[s(n,{name:"vscode-icons:file-type-python"}),e[7]||(e[7]=t("span",{class:"name"},"__init__.py",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",v,[s(n,{name:"vscode-icons:file-type-python"}),e[8]||(e[8]=t("span",{class:"name"},"generator.py",-1)),e[9]||(e[9]=t("span",{class:"comment"},"# 用于创建更多爬虫文件的模块",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",_,[s(n,{name:"vscode-icons:file-type-python"}),e[10]||(e[10]=t("span",{class:"name"},"items.py",-1)),e[11]||(e[11]=t("span",{class:"comment"},"# 配置抓取字段的模块",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",h,[s(n,{name:"vscode-icons:file-type-python"}),e[12]||(e[12]=t("span",{class:"name"},"middleware.py",-1)),e[13]||(e[13]=t("span",{class:"comment"},"# 配置中间件hook的模块",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",T,[s(n,{name:"vscode-icons:file-type-python"}),e[14]||(e[14]=t("span",{class:"name"},"pipelines.py",-1)),e[15]||(e[15]=t("span",{class:"comment"},"# 配置数据处理管道的模块",-1))])]),_:1}),s(o,{type:"file",expanded:!1,empty:!0},{default:p(()=>[t("span",b,[s(n,{name:"vscode-icons:file-type-python"}),e[16]||(e[16]=t("span",{class:"name"},"settings.py",-1)),e[17]||(e[17]=t("span",{class:"comment"},"# 项目配置文件",-1))])]),_:1})])]),_:1})])]),e[19]||(e[19]=l('<h3 id="模块功能说明" tabindex="-1"><a class="header-anchor" href="#模块功能说明"><span>模块功能说明</span></a></h3><ol><li><code>项目根目录</code>: 作为项目的跟目录文件夹，包含 <code>spiders</code> 目录，<code>generator.py</code>、<code>items.py</code>、<code>middleware.py</code>、<code>pipelines.py</code>、<code>settings.py</code>。</li><li><code>spiders</code>: 用于管理和存放所有爬虫文件，在此目录下爬虫文件才可以正常执行任务。</li><li><code>generator.py</code>: 用于新建更多的爬虫文件任务，通过传递不同的参数来创建不同的爬虫任务。</li><li><code>items.py</code>: 用于配置抓取的字段信息，如字段名称，数据类型，默认值等，方便爬虫任务进行传递保存数据。</li><li><code>middleware.py</code>: 用于配置和创建更多的中间件任务，来进行个性化和定制化系统执行功能。</li><li><code>pipelines.py</code>： 用于配置数据处理管道，进行进一步的数据清洗和持久化操作。</li><li><code>settings.py</code>: 项目全局配置文件，爬虫内部没有自定义配置的时候默认使用该配置文件中的设置。</li></ol>',2))])}const V=i(m,[["render",w],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/guide/88vfjo3x/","title":"项目结构","lang":"zh-CN","frontmatter":{"title":"项目结构","icon":"hugeicons:structure-04","createTime":"2025/01/11 19:32:27","permalink":"/guide/88vfjo3x/","description":"项目结构 模块功能说明 项目根目录: 作为项目的跟目录文件夹，包含 spiders 目录，generator.py、items.py、middleware.py、pipelines.py、settings.py。 spiders: 用于管理和存放所有爬虫文件，在此目录下爬虫文件才可以正常执行任务。 generator.py: 用于新建更多的爬虫文件任务...","head":[["meta",{"property":"og:url","content":"https://hunterx-docs.com/guide/88vfjo3x/"}],["meta",{"property":"og:site_name","content":"HunterX 文档"}],["meta",{"property":"og:title","content":"项目结构"}],["meta",{"property":"og:description","content":"项目结构 模块功能说明 项目根目录: 作为项目的跟目录文件夹，包含 spiders 目录，generator.py、items.py、middleware.py、pipelines.py、settings.py。 spiders: 用于管理和存放所有爬虫文件，在此目录下爬虫文件才可以正常执行任务。 generator.py: 用于新建更多的爬虫文件任务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-16T07:35:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-16T07:35:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"项目结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-16T07:35:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.18,"words":353},"git":{"updatedTime":1737012954000,"contributors":[{"name":"袁少航","username":"袁少航","email":"yuanshaohang@dataoceanai.com","commits":1,"avatar":"https://avatars.githubusercontent.com/袁少航?v=4","url":"https://github.com/袁少航"}]},"autoDesc":true,"filePathRelative":"notes/guide/1.start/4.project-structure.md","bulletin":true}');export{V as comp,k as data};
