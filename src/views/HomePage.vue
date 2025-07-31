<template>
    <div class="invoice-generator">
        <!-- 页面头部 -->
        <header class="header">
            <div class="container">
                <h1 class="title">Invoice Generator</h1>
                <p class="subtitle">Generate professional Windsurf and Cursor invoices instantly with random data</p>
            </div>
        </header>

        <!-- 主要内容区域 -->
        <main class="main-content">
            <div class="container">
                <div class="content-grid">
                    <!-- 左侧控制面板 -->
                    <div class="control-panel">
                        <div class="panel-content">
                            <h2>Generate Invoice</h2>

                            <!-- Invoice类型选择 -->
                            <div class="form-group">
                                <label class="form-label">Select Invoice Type</label>
                                <a-radio-group v-model:value="formData.invoiceType" class="invoice-type-group">
                                    <a-radio value="windsurf" class="invoice-type-option">
                                        <div class="option-content">
                                            <span class="option-name">Windsurf Invoice</span>
                                            <span class="option-price">$6.90</span>
                                        </div>
                                    </a-radio>
                                    <a-radio value="cursor" class="invoice-type-option">
                                        <div class="option-content">
                                            <span class="option-name">Cursor Invoice</span>
                                            <span class="option-price">$20.00</span>
                                        </div>
                                    </a-radio>
                                </a-radio-group>
                            </div>

                            <!-- 邮箱输入 -->
                            <div class="form-group">
                                <label class="form-label required">Email Address</label>
                                <a-input v-model:value="formData.email" placeholder="Enter your email address"
                                    size="large" :status="emailError ? 'error' : ''" @blur="validateEmailInput" />
                                <div v-if="emailError" class="error-message">
                                    {{ emailError }}
                                </div>
                            </div>

                            <!-- 生成按钮 -->
                            <div class="form-group">
                                <a-button type="primary" size="large" block :loading="isGenerating"
                                    :disabled="!isFormValid" @click="generateInvoice" class="generate-button">
                                    Generate New Invoice
                                </a-button>
                            </div>

                            <!-- QQ群联系部分 -->
                            <div class="qq-contact-section">
                                <div class="qq-group-link">
                                    <a target="_blank"
                                        href="https://qm.qq.com/cgi-bin/qm/qr?k=SDl09kM1ddGSI227XJ09BOPUZK3IPbX_&jump_from=webapi&authKey=b3wA63zmYInVWkRH+qShgVLvWdLG1Tsa6f0HR4Z1UMFYrjMo4wDs3z27oNJXQQxZ">
                                        <img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="Augment技术交流群"
                                            title="Augment技术交流群">
                                        <span class="qq-group-text">加入技术交流群</span>
                                    </a>
                                </div>
                                <div class="qq-qr-code">
                                    <a-image src="/qq.png" style="width: 100px;height: 100px;" alt="QQ Group QR Code"
                                        :preview="true" />
                                </div>
                                <div class="qq-group-number">
                                    QQ群: 1029341429
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 右侧Invoice预览 -->
                    <div class="preview-panel">
                        <div class="preview-content">
                            <div v-if="!currentInvoice" class="empty-state">
                                <div class="empty-icon">
                                    <FileTextOutlined />
                                </div>
                                <h3>No Invoice Generated</h3>
                                <p>Fill in the form and click "Generate New Invoice" to create your invoice.</p>
                            </div>

                            <!-- Invoice组件将在这里显示 -->
                            <InvoiceTemplate v-if="currentInvoice" :invoice-data="currentInvoice"
                                @print="handlePrint" />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- 功能说明部分 -->
        <div class="features-section">
            <div class="container">
                <h2 class="features-title">功能说明</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <h3 class="feature-card-title">随机数据生成</h3>
                        <p class="feature-card-desc">自动生成Invoice号码、收据号码、支付方式、收票人信息和账单日期</p>
                    </div>
                    <div class="feature-card">
                        <h3 class="feature-card-title">PDF导出</h3>
                        <p class="feature-card-desc">点击"打印/保存PDF"按钮可以将Invoice保存为PDF文件</p>
                    </div>
                    <div class="feature-card">
                        <h3 class="feature-card-title">多种模板</h3>
                        <p class="feature-card-desc">支持Windsurf和Cursor两种Invoice模板，完全保持原始样式和布局</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { message } from 'ant-design-vue'
import { FileTextOutlined, CheckCircleOutlined } from '@ant-design/icons-vue'
import type { FormData, InvoiceData } from '@/types'
import { generateInvoiceData, validateEmail, printInvoice } from '@/utils/invoiceGenerator'
import InvoiceTemplate from '@/components/InvoiceTemplate.vue'

// 响应式数据
const formData = ref<FormData>({
    email: '',
    invoiceType: 'windsurf'
})

const currentInvoice = ref<InvoiceData | null>(null)
const isGenerating = ref(false)
const emailError = ref('')

// 计算属性
const isFormValid = computed(() => {
    return formData.value.email && validateEmail(formData.value.email) && !emailError.value
})

// 验证邮箱输入
const validateEmailInput = () => {
    if (!formData.value.email) {
        emailError.value = 'Email is required'
    } else if (!validateEmail(formData.value.email)) {
        emailError.value = 'Please enter a valid email address'
    } else {
        emailError.value = ''
    }
}

// 生成Invoice
const generateInvoice = async () => {
    if (!isFormValid.value) {
        message.error('Please fill in all required fields correctly')
        return
    }

    isGenerating.value = true

    try {
        // 模拟生成延迟
        await new Promise(resolve => setTimeout(resolve, 1000))

        // 生成Invoice数据
        currentInvoice.value = generateInvoiceData(formData.value.email, formData.value.invoiceType)

        message.success('Invoice generated successfully!')
    } catch (error) {
        message.error('Failed to generate invoice. Please try again.')
    } finally {
        isGenerating.value = false
    }
}

// 处理打印
const handlePrint = async () => {
    await printInvoice()
}
</script>

<style scoped>
.invoice-generator {
    min-height: 100vh;
    background: #f5f7fa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* 头部样式 */
.header {
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
    color: white;
    padding: 60px 0;
    text-align: center;
}

.title {
    font-size: 48px;
    font-weight: 700;
    margin: 0 0 16px 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
    font-size: 20px;
    margin: 0;
    opacity: 0.9;
}

/* 主要内容区域 */
.main-content {
    padding: 60px 0;
}

.content-grid {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 40px;
    align-items: start;
}

/* 控制面板 */
.control-panel {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.panel-content {
    padding: 32px;
}

.panel-content h2 {
    font-size: 24px;
    font-weight: 600;
    color: #262626;
    margin: 0 0 32px 0;
}

.form-group {
    margin-bottom: 24px;
}

.form-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #262626;
    margin-bottom: 8px;
}

.form-label.required::after {
    content: ' *';
    color: #ff4d4f;
}

.invoice-type-group {
    width: 100%;
}

.invoice-type-option {
    display: block !important;
    width: 100%;
    padding: 16px;
    border: 2px solid #f0f0f0;
    border-radius: 8px;
    margin-bottom: 12px;
    transition: all 0.3s ease;
}

.invoice-type-option:hover {
    border-color: #1890ff;
}

.invoice-type-option.ant-radio-wrapper-checked {
    border-color: #1890ff;
    background: #e6f7ff;
}

.option-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
}

.option-name {
    font-weight: 500;
    color: #262626;
}

.option-price {
    font-weight: 600;
    color: #1890ff;
    font-size: 16px;
}

.error-message {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 4px;
}

.generate-button {
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    background: #1890ff;
    border-color: #1890ff;
}

.generate-button:hover {
    background: #40a9ff;
    border-color: #40a9ff;
}

/* 预览面板 */
.preview-panel {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-height: 600px;
}

.preview-content {
    padding: 32px;
}

.empty-state {
    text-align: center;
    padding: 80px 40px;
    color: #8c8c8c;
}

.empty-icon {
    font-size: 64px;
    margin-bottom: 24px;
    opacity: 0.5;
}

.empty-state h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 12px 0;
    color: #595959;
}

.empty-state p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
}

/* Invoice类型选择样式 */
.invoice-type-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.invoice-type-option {
    display: flex !important;
    align-items: center;
    padding: 16px;
    border: 2px solid #e8e8e8;
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
}

.invoice-type-option:hover {
    border-color: #1890ff;
    background-color: #f6f9ff;
}

.invoice-type-option.ant-radio-wrapper-checked {
    border-color: #1890ff;
    background-color: #f6f9ff;
}

.option-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 8px;
}

.option-name {
    font-weight: 500;
    color: #333;
}

.option-price {
    font-weight: 600;
    color: #1890ff;
}

/* QQ群联系部分样式 */
.qq-contact-section {
    margin-top: 32px;
    padding: 24px;
    background: #f8f9fa;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
}

.qq-group-link {
    margin-bottom: 16px;
}

.qq-group-link a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #1890ff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.2s ease;
    font-size: 14px;
}

.qq-group-link a:hover {
    background: #40a9ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

.qq-group-text {
    font-weight: 500;
}

.qq-qr-code {
    margin: 16px 0;
}


.qq-group-number {
    font-size: 14px;
    color: #6b7280;
    font-weight: 500;
    margin-top: 8px;
}

/* QQ二维码预览遮罩样式 */
.qr-preview-mask {
    background: rgba(0, 0, 0, 0.6) !important;
    color: white !important;
    font-size: 14px !important;
    border-radius: 4px !important;
}

/* 功能说明部分样式 */
.features-section {
    background: white;
    border-top: 1px solid #e8e8e8;
    padding: 48px 0;
}

.features-title {
    font-size: 24px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 32px;
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.feature-card {
    background: #f9fafb;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    transition: all 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-card-title {
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 12px 0;
}

.feature-card-desc {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
}

/* 页脚 */
.footer {
    background: #fafafa;
    padding: 40px 0;
    border-top: 1px solid #f0f0f0;
}

.footer-content {
    text-align: center;
}

.feature-list {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1890ff;
    font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1024px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .control-panel {
        order: 1;
    }

    .preview-panel {
        order: 2;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 16px;
    }

    .header {
        padding: 40px 0;
    }

    .title {
        font-size: 32px;
    }

    .subtitle {
        font-size: 16px;
    }

    .main-content {
        padding: 40px 0;
    }

    .panel-content {
        padding: 24px;
    }

    .preview-content {
        padding: 24px;
    }

    .feature-list {
        gap: 24px;
    }

    .feature-item {
        font-size: 14px;
    }
}
</style>