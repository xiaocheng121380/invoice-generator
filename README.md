# 🧾 发票生成器

基于 Vue 3 和 TypeScript 构建的现代化专业发票生成器。为 Windsurf 和 Cursor 生成真实的发票，支持国际化随机数据、专业模板和 PDF 导出功能。

![Invoice Generator](https://img.shields.io/badge/Vue-3.5.18-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Ant Design Vue](https://img.shields.io/badge/Ant%20Design%20Vue-4.2.6-1890FF?style=flat-square&logo=ant-design&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.0.0-646CFF?style=flat-square&logo=vite&logoColor=white)

## ✨ 功能特性

### 🎯 **双模板支持**

- **Windsurf 发票**: Windsurf Pro 订阅的专业模板 ($6.90)
- **Cursor 发票**: Cursor Pro License 的现代收据风格模板 ($20.00)
- 统一设计系统，支持动态内容切换

### 🌍 **国际化随机数据生成**

- **60+ 国际化姓名**: 中文、日文、法文、德文、西班牙文和英文姓名
- **38+ 全球地址**: 来自世界主要城市的街道地址（纽约、东京、巴黎、柏林等）
- **20+ 美国城市**: 包含完整的州代码和邮政编码
- **多种支付方式**: Visa、Mastercard、Apple Pay、Google Pay、PayPal 等
- **自动日期生成**: 随机账单日期和订阅周期

### 📄 **专业发票功能**

- **唯一发票编号**: 自动生成随机字母数字代码
- **收据编号**: 每张发票的独立跟踪编号
- **账单信息**: 包含国际地址的完整客户详情
- **明细账单**: 产品描述、数量、单价和总计
- **税务信息**: 公司税号和账单详情

### 🖨️ **PDF 导出和打印**

- **高质量 PDF 生成**: 使用 HTML2Canvas 实现像素完美的导出
- **打印优化布局**: 物理打印的清洁专业外观
- **一键导出**: 直接下载或打印对话框
- **响应式设计**: 针对各种屏幕尺寸和打印格式优化

### 💬 **社区集成**

- **QQ 群联系**: 内置技术讨论群 (1029341429)
- **可点击二维码**: 可展开的二维码，方便加群
- **社区支持**: 直接访问开发者社区

![QQ群二维码](./public/qq.png)

**扫码加入 Augment 技术交流群**
**QQ 群号**: 1029341429

## 🛠️ 技术栈

- **前端框架**: Vue 3.5.18 with Composition API
- **开发语言**: TypeScript 5.0.0 提供类型安全
- **UI 组件库**: Ant Design Vue 4.2.6
- **构建工具**: Vite 4.0.0 快速开发和构建
- **PDF 生成**: HTML2Canvas 1.4.1 高质量导出
- **图标库**: Ant Design Icons Vue 7.0.1
- **样式设计**: CSS3 响应式设计原则

## 📋 环境要求

- **Node.js**: 版本 16.0.0 或更高
- **包管理器**: npm（推荐）或 yarn
- **现代浏览器**: Chrome、Firefox、Safari 或 Edge（最新版本）

## 🚀 安装和设置

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/invoice-generator.git
cd invoice-generator
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

应用程序将在 `http://localhost:5173` 上运行

### 4. 生产环境构建

```bash
npm run build
```

### 5. 预览生产构建

```bash
npm run preview
```

## 📖 使用说明

### 🎨 **生成发票**

1. **选择发票类型**:

   - 在 Windsurf 发票 ($6.90) 或 Cursor 发票 ($20.00) 之间选择
   - 每个模板都有独特的品牌、定价和公司信息

2. **输入邮箱地址**:

   - 输入账单邮箱地址
   - 邮箱验证确保格式正确

3. **生成发票**:
   - 点击"生成新发票"按钮
   - 系统自动创建:
     - 唯一的发票和收据编号
     - 包含国际化姓名和地址的随机客户信息
     - 账单日期和订阅周期
     - 支付方式选择

### 🖨️ **导出和打印**

1. **PDF 导出**:

   - 点击"打印/保存 PDF"按钮
   - 选择保存为 PDF 或直接打印
   - 适合专业使用的高分辨率输出

2. **打印选项**:
   - 带有可自定义设置的浏览器打印对话框
   - 针对标准纸张尺寸优化的布局
   - 清洁、专业的外观

### 💬 **社区支持**

- **QQ 群**: 加入我们的技术讨论群 (1029341429)
- **二维码**: 点击二维码查看放大版本，方便扫描
- **直接链接**: 使用"加入技术群"按钮即时访问

## 📁 项目结构

```
invoice-generator/
├── public/                 # 静态资源
│   ├── cursor-logo.png    # Cursor 品牌 logo
│   ├── windsurf-logo.png  # Windsurf 品牌 logo
│   └── qq.png             # QQ 群二维码
├── src/
│   ├── components/        # Vue 组件
│   │   └── InvoiceTemplate.vue
│   ├── types/            # TypeScript 类型定义
│   │   └── index.ts
│   ├── utils/            # 工具函数
│   │   └── invoiceGenerator.ts
│   ├── views/            # 页面组件
│   │   └── HomePage.vue
│   ├── App.vue           # 根组件
│   └── main.ts           # 应用程序入口点
├── package.json          # 依赖和脚本
└── vite.config.ts        # Vite 配置
```

## 🤝 贡献指南

我们欢迎为发票生成器的改进做出贡献！以下是您可以帮助的方式：

1. **Fork 仓库**
2. **创建功能分支**: `git checkout -b feature/amazing-feature`
3. **提交更改**: `git commit -m 'Add amazing feature'`
4. **推送到分支**: `git push origin feature/amazing-feature`
5. **打开 Pull Request**

### 💬 **加入我们的社区**

- **QQ 技术群**: 1029341429
- **讨论话题**: Vue.js、TypeScript、发票生成、PDF 导出
- **技术支持**: 获取实现和自定义方面的帮助

## 📄 许可证

本项目基于 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- **Vue.js 团队** 提供的优秀框架
- **Ant Design 团队** 提供的精美 UI 组件
- **HTML2Canvas** 提供的可靠 PDF 生成功能
- **社区贡献者** 提供的反馈和改进建议

---

**由发票生成器团队用 ❤️ 制作**

_技术讨论和支持，请加入我们的 QQ 群：1029341429_
