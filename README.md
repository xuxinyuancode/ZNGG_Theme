# ZNGG前端页面
本项目使用tailwindｃｓｓ，本意是想要做出一个好看的在前工具网站。
目标地址：https://zn.gg

## 新建项目流程
```shell
git clone https://github.com/xuxinyuancode/ZNGG_Theme.git
cd ZNGG_Theme
npm install postcss-cli -g
npm init -y
npm install -D tailwindcss postcss autoprefixer cssnano vite
mkdir css
// 这一步可能会因为编码出问题，可以手动新建文件然后把内容粘贴。
echo '@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";' > css/tailwind.css
// 在package.json中写入"dev": "vite"
npx tailwindcss init -p

```



地址：

|  网站   | url  |
|  ----  | ----  |
| 首页  | / |
| 文章列表  | article.html |
| 文章列表_1  | article-{页码}.html |
| 文章列表_2  | article-{页码}.html |
| 文章阅读  | detail-{id}.html |
| 工具列表  | tool.html |
| 工具列表_1  | tool-{页码}.html |
| 工具列表_2  | tool-{分类}-{页码}.html |
| 工具页面  | thread-{id}.html |




编辑器：mavon editor

```

## 鸣谢
本项目有参考其它网站，且已征得同意。
* [通天技术网](https://www.aqwdzy.com/)
