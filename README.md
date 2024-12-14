# 在干啥 (What Am I Doing)

"在干啥"是一个简单的项目，用来帮助他人了解用户在干什么的项目。

## 技术栈

- **Vite**：快速构建工具
- **React**：用于构建用户界面的JavaScript库

## 页面

- **/**：展示当前用户正在做的事情，可以实时查看和更新状态。
- **/admin**：管理员可以通过该页面更新全局的状态或任务，并提供简易的管理功能。

## 安装

1. 克隆仓库：
   git clone https://github.com/JUZICN/whatamidoing.git
2. 进入项目目录：
   cd what-am-i-doing
3. 安装依赖：
   npm install
4. 启动开发服务器：
   npm run dev

## 使用
管理员页面：管理员可以访问 /admin 路由，登录后更新系统中的状态，管理任务等。默认后台密码是 123456，你可以在 src/utils/constants.ts 文件中修改密码。
请注意：如果使用本项目，请**不要**删除Footer中的Juzi和https://juz1.cn。
