# 张译尹 / Aria 个人作品集

这是一个无需安装、无需构建的静态网站，已经适配电脑与手机。包含：

- 个人介绍与 AI 创作者名片
- 数据新闻、UI、网页设计、公益议题项目
- 46 件可筛选摄影与视觉作品
- Three.js WebGL 场景与滚动驱动的 3D 空间作品场
- 完整大图查看、前后切换、键盘操作
- 中英文简历查看
- 搜索引擎基础信息与个人结构化数据

## 本地预览

直接双击 `index.html` 即可查看。为了获得和线上一致的效果，也可以在该文件夹中启动任意静态文件服务器。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `aria-portfolio`。
2. 将本文件夹内的全部文件上传到仓库根目录，不要只上传 `index.html`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. Branch 选择 `main`，文件夹选择 `/ (root)`，保存。
6. 等待几分钟后，GitHub 会给出公开网址。

如果希望网址更像个人品牌，可以购买域名后，在 Pages 设置中填写 **Custom domain**。绑定域名后，再把该真实网址写进 `index.html` 的 canonical 与分享信息中，会更有利于搜索收录。

## 让搜索引擎更容易找到

- 保持仓库公开，页面正文中已包含姓名、职业方向和作品分类。
- 发布后可在 Google Search Console 与 Bing Webmaster Tools 提交网站。
- 在小红书、微博、LinkedIn、B 站简介等公开页面链接这个网站。
- 经常更新作品与文字；真实、持续的外部链接比堆关键词更有效。

## 修改内容

- 页面文字：`index.html`
- 颜色、排版与手机适配：`styles.css`
- 筛选、弹窗与互动：`app.js`
- WebGL 3D 场景源文件：`three-scene.js`（修改后需重新打包为 `three-scene.bundle.js`）
- 图片：`assets/images/`

图片已经转换为 WebP 并压缩，适合公开网页使用。替换图片时，建议单张控制在 500KB 以内。

## 3D 运行说明

网站已内置本地 Three.js 模块，不依赖 CDN，也不需要 Gemini API Key。WebGL 不可用或系统开启“减少动态效果”时，页面会自动保留完整的二维作品内容。Three.js 的 MIT 许可证保存在 `assets/vendor/LICENSE-three.txt`。
