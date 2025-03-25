import{_ as s,c as i,f as l,o as e}from"./app-B3GkPK4x.js";const a={};function n(d,t){return e(),i("div",null,t[0]||(t[0]=[l(`<p>框架内的请求功能同样也具有丰富的功能，这里你会看到更多的使用技巧</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>该模块封装了网络请求功能，支持HTTP/HTTPS请求，适用于数据抓取、接口请求等场景。模块支持多种请求方式，并提供了超时重试、请求头自定义、代理设置等功能。</p><h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h2><ul><li><code>多种请求方式</code>：支持 GET、POST、Patch 等常用请求方法。</li><li><code>请求重试机制</code>：支持失败重试，避免临时性网络问题导致任务中断。</li><li><code>自定义请求头</code>：可灵活设置请求头（Headers），支持模拟浏览器请求。</li><li><code>超时与延迟控制</code>：支持请求超时设置，防止请求长时间阻塞。</li><li><code>代理支持</code>：支持 HTTP/HTTPS 代理，突破 IP 限制。</li><li><code>方法回调</code>：通过设置回调函数，响应回调功能用于在请求完成后自动处理响应数据</li><li><code>链路传参</code>：可以在请求发送时携带自定义数据，并在响应回调函数中访问这些数据</li><li><code>代理忽略</code>：针对某些特定场景下不需要ip代理时，通过配置该参数来进行控制</li><li><code>请求模块切换</code>：通过参数设置可以切换请求库，避免单一请求库无法满足需求</li><li><code>TLS指纹绕过</code>：可以有效模拟浏览器的安全请求，绕过反爬机制，提升数据抓取的安全性和稳定性。</li></ul><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2><h3 id="requests方法" tabindex="-1"><a class="header-anchor" href="#requests方法"><span>Requests方法</span></a></h3><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">url</td><td style="text-align:left;">str</td><td style="text-align:left;">✅</td><td style="text-align:left;"></td><td style="text-align:left;">目标url</td></tr><tr><td style="text-align:left;">headers</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求时使用的header值</td></tr><tr><td style="text-align:left;">params</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求用到的额外参数</td></tr><tr><td style="text-align:left;">cookies</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求所使用的cookies值</td></tr><tr><td style="text-align:left;">timeout</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">最大超时时间</td></tr><tr><td style="text-align:left;">callback</td><td style="text-align:left;">Callable</td><td style="text-align:left;">✅</td><td style="text-align:left;"></td><td style="text-align:left;">响应回调函数</td></tr><tr><td style="text-align:left;">meta</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求链路传参，常用于多层页面数据获取、任务追踪、状态传递等场景</td></tr><tr><td style="text-align:left;">proxy</td><td style="text-align:left;">str</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求使用的ip代理，格式：&#39;http://xxx.xxx.xxx&#39;</td></tr><tr><td style="text-align:left;">level</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">0</td><td style="text-align:left;">请求优先级，数字越大优先级越高，不设置时会根据回调函数自动生成</td></tr><tr><td style="text-align:left;">verify_ssl</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">是否禁用ssl验证</td></tr><tr><td style="text-align:left;">allow_redirects</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">True</td><td style="text-align:left;">是否允许请求跳转</td></tr><tr><td style="text-align:left;">is_file</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否是用于文件下载</td></tr><tr><td style="text-align:left;">retry_count</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">0</td><td style="text-align:left;">最大失败重试次数</td></tr><tr><td style="text-align:left;">is_encode</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">是否编码url</td></tr><tr><td style="text-align:left;">ignore_ip</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否忽略ip代理</td></tr><tr><td style="text-align:left;">is_httpx</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">是否使用httpx库进行请求</td></tr><tr><td style="text-align:left;">is_TLS</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">是否使用TLS请求</td></tr><tr><td style="text-align:left;">dont_filter</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否进行去重</td></tr><tr><td style="text-align:left;">encoding</td><td style="text-align:left;">str</td><td style="text-align:left;">❌</td><td style="text-align:left;"></td><td style="text-align:left;">响应编码格式，不设置时，框架内部会自动解析</td></tr></tbody></table><ul><li>示例代码</li></ul><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">spiders </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> MemorySpider</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FirstSpiderSpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MemorySpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    name </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">first_spider</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">header </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">            &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">User-Agent</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> start_requests</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        url </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://www.example.com/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Requests</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> headers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">header</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> callback</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">parse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> level</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    async</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> parse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">status_code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __name__</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">__main__</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    start_run </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> FirstSpiderSpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    start_run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="formrequests方法" tabindex="-1"><a class="header-anchor" href="#formrequests方法"><span>FormRequests方法</span></a></h3><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">默认值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">url</td><td style="text-align:left;">str</td><td style="text-align:left;">✅</td><td style="text-align:left;"></td><td style="text-align:left;">目标url</td></tr><tr><td style="text-align:left;">headers</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求时使用的header值</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求时所用到的form表单参数</td></tr><tr><td style="text-align:left;">json_params</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求时所用到的json参数</td></tr><tr><td style="text-align:left;">cookies</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求所使用的cookies值</td></tr><tr><td style="text-align:left;">timeout</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">最大超时时间</td></tr><tr><td style="text-align:left;">callback</td><td style="text-align:left;">Callable</td><td style="text-align:left;">✅</td><td style="text-align:left;"></td><td style="text-align:left;">响应回调函数</td></tr><tr><td style="text-align:left;">meta</td><td style="text-align:left;">dict</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求链路传参，常用于多层页面数据获取、任务追踪、状态传递等场景</td></tr><tr><td style="text-align:left;">proxy</td><td style="text-align:left;">str</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">请求使用的ip代理，格式：&#39;http://xxx.xxx.xxx&#39;</td></tr><tr><td style="text-align:left;">level</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">0</td><td style="text-align:left;">请求优先级，数字越大优先级越高，不设置时会根据回调函数自动生成</td></tr><tr><td style="text-align:left;">verify_ssl</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">是否禁用ssl验证</td></tr><tr><td style="text-align:left;">allow_redirects</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">True</td><td style="text-align:left;">是否允许请求跳转</td></tr><tr><td style="text-align:left;">is_file</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否是用于文件下载</td></tr><tr><td style="text-align:left;">retry_count</td><td style="text-align:left;">int</td><td style="text-align:left;">❌</td><td style="text-align:left;">0</td><td style="text-align:left;">最大失败重试次数</td></tr><tr><td style="text-align:left;">is_encode</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">None</td><td style="text-align:left;">是否编码url</td></tr><tr><td style="text-align:left;">ignore_ip</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否忽略ip代理</td></tr><tr><td style="text-align:left;">is_httpx</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">是否使用httpx库进行请求</td></tr><tr><td style="text-align:left;">is_TLS</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">是否使用TLS请求</td></tr><tr><td style="text-align:left;">dont_filter</td><td style="text-align:left;">bool</td><td style="text-align:left;">❌</td><td style="text-align:left;">False</td><td style="text-align:left;">请求是否进行去重</td></tr><tr><td style="text-align:left;">encoding</td><td style="text-align:left;">str</td><td style="text-align:left;">❌</td><td style="text-align:left;"></td><td style="text-align:left;">响应编码格式，不设置时，框架内部会自动解析</td></tr></tbody></table><ul><li>示例代码</li></ul><div class="language-python line-numbers-mode" data-ext="python" data-title="python"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">spiders </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> MemorySpider</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> FirstSpiderSpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">MemorySpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    name </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">first_spider</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __init__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">        self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">header </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">            &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">User-Agent</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> start_requests</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        url </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://www.example.com/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        data </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">            &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">page</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">            &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">size</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        yield</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> hunterx</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">FormRequests</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> headers</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">header</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> callback</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">parse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> level</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    async</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> def</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> parse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">self</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">response</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">status_code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">if</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __name__</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ==</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">__main__</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    start_run </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> FirstSpiderSpider</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    start_run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">run</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>该请求功能模块具备灵活性和高扩展性，支持多种请求方式与配置，能够满足大多数爬虫和数据请求场景的需求</p>`,16)]))}const k=s(a,[["render",n],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/guide/bui4ai1e/","title":"请求功能","lang":"zh-CN","frontmatter":{"title":"请求功能","icon":"si:pull-request-line","createTime":"2025/01/14 15:19:31","permalink":"/guide/bui4ai1e/","description":"框架内的请求功能同样也具有丰富的功能，这里你会看到更多的使用技巧 简介 该模块封装了网络请求功能，支持HTTP/HTTPS请求，适用于数据抓取、接口请求等场景。模块支持多种请求方式，并提供了超时重试、请求头自定义、代理设置等功能。 功能特点 多种请求方式：支持 GET、POST、Patch 等常用请求方法。 请求重试机制：支持失败重试，避免临时性网络问...","head":[["meta",{"property":"og:url","content":"https://hunterx-docs.com/guide/bui4ai1e/"}],["meta",{"property":"og:site_name","content":"HunterX 文档"}],["meta",{"property":"og:title","content":"请求功能"}],["meta",{"property":"og:description","content":"框架内的请求功能同样也具有丰富的功能，这里你会看到更多的使用技巧 简介 该模块封装了网络请求功能，支持HTTP/HTTPS请求，适用于数据抓取、接口请求等场景。模块支持多种请求方式，并提供了超时重试、请求头自定义、代理设置等功能。 功能特点 多种请求方式：支持 GET、POST、Patch 等常用请求方法。 请求重试机制：支持失败重试，避免临时性网络问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-16T07:35:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-16T07:35:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"请求功能\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-16T07:35:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.95,"words":1185},"git":{"updatedTime":1737012954000,"contributors":[{"name":"袁少航","username":"袁少航","email":"yuanshaohang@dataoceanai.com","commits":1,"avatar":"https://avatars.githubusercontent.com/袁少航?v=4","url":"https://github.com/袁少航"}]},"autoDesc":true,"filePathRelative":"notes/guide/3.function/3.request.md","bulletin":true}');export{k as comp,p as data};
