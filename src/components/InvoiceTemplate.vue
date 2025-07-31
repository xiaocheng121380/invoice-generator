<template>
  <div class="invoice-template" :class="'invoice-' + invoiceData.type">
    <!-- 打印按钮 -->
    <div class="print-actions">
      <a-button type="primary" size="large" @click="handlePrint" class="print-button">
        <PrinterOutlined />
        Print / Save as PDF
      </a-button>
    </div>

    <!-- Invoice内容 -->
    <div class="invoice-content" id="invoice-content">
      <!-- 统一的Receipt模板 - 根据类型动态显示内容 -->
      <div class="cursor-receipt">
        <!-- 头部 -->
        <div class="receipt-header">
          <h1 class="receipt-title">Receipt</h1>
          <div v-if="invoiceData.type === 'windsurf'">
            <img style="height: 30px;width: auto;" :src="windsurfLogoUrl" alt="Windsurf Logo" class="logo-img" />
          </div>
          <div v-else class="logo">
            <img :src="cursorLogoUrl" style="height: 60px;width: auto;" alt="Cursor Logo" class="logo-img" />
          </div>
        </div>

        <!-- 基本信息表格 -->
        <table class="info-table">
          <tbody>
            <tr>
              <td class="info-label">Invoice number</td>
              <td class="info-value">{{ invoiceData.invoiceNumber }}</td>
            </tr>
            <tr>
              <td class="info-label">Receipt number</td>
              <td class="info-value">{{ invoiceData.receiptNumber }}</td>
            </tr>
            <tr>
              <td class="info-label">Date paid</td>
              <td class="info-value">{{ invoiceData.datePaid }}</td>
            </tr>
            <tr>
              <td class="info-label">Payment method</td>
              <td class="info-value">{{ invoiceData.paymentMethod }}</td>
            </tr>
          </tbody>
        </table>

        <!-- 公司和客户信息 -->
        <div class="contact-info">
          <div class="company-section">
            <p class="company-name">{{ template.companyInfo.name }}</p>
            <p v-for="line in template.companyInfo.address" :key="line">{{ line }}</p>
            <p v-if="template.companyInfo.phone">{{ template.companyInfo.phone }}</p>
            <p>{{ template.companyInfo.email }}</p>
          </div>
          <div class="customer-section">
            <p class="section-title">Bill to</p>
            <p class="customer-name">{{ invoiceData.billTo.name.toUpperCase() }}</p>
            <p v-for="line in invoiceData.billTo.address" :key="line">{{ line }}</p>
            <p>{{ invoiceData.billTo.email }}</p>
          </div>
        </div>

        <!-- 金额标题 -->
        <h2 class="amount-title">{{ formatCurrency(template.price) }} paid on {{ invoiceData.datePaid }}</h2>

        <!-- 项目详情表格 -->
        <table class="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="item-description">{{ template.productName }}</div>
                <div class="item-period">{{ invoiceData.period }}</div>
              </td>
              <td>1</td>
              <td>{{ formatCurrency(template.price) }}</td>
              <td>{{ formatCurrency(template.price) }}</td>
            </tr>
          </tbody>
        </table>

        <!-- 总计表格 -->
        <table class="totals-table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>{{ formatCurrency(template.price) }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{{ formatCurrency(template.price) }}</td>
            </tr>
            <tr class="amount-paid-row">
              <td><strong>Amount paid</strong></td>
              <td><strong>{{ formatCurrency(template.price) }}</strong></td>
            </tr>
          </tbody>
        </table>

        <!-- 页脚 -->
        <div class="receipt-footer">
          <p>Tax ID: {{ template.companyInfo.taxInfo }}</p>
        </div>

        <!-- 底部信息 -->
        <div class="bottom-info">
          <span>{{ bottomInfoText }}</span>
          <span>Page 1 of 1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PrinterOutlined } from '@ant-design/icons-vue'
import type { InvoiceData } from '@/types'
import { invoiceTemplates, formatCurrency } from '@/utils/invoiceGenerator'

// Logo URLs (从public目录访问)
const windsurfLogoUrl = '/windsurf-logo.png'
const cursorLogoUrl = '/cursor-logo.png'

// Props
interface Props {
  invoiceData: InvoiceData
}

const props = defineProps<Props>()

// Emits
const emit = defineEmits<{
  print: []
}>()

// 计算属性 - 根据Invoice类型动态选择模板
const template = computed(() => {
  return invoiceTemplates[props.invoiceData.type]
})

const bottomInfoText = computed(() => {
  return `${props.invoiceData.receiptNumber} · ${formatCurrency(template.value.price)} paid on ${props.invoiceData.datePaid}`
})



// 处理打印
const handlePrint = () => {
  emit('print')
}
</script>

<style scoped>
.invoice-template {
  max-width: 800px;
  margin: 0 auto;
}

.print-actions {
  margin-bottom: 24px;
  text-align: right;
}

.print-button {
  background: #1890ff;
  border-color: #1890ff;
  height: 40px;
  padding: 0 24px;
  font-weight: 500;
}

.print-button:hover {
  background: #40a9ff;
  border-color: #40a9ff;
}

.invoice-content {
  background: white;
  padding: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  color: #000;
}

/* Cursor Receipt 样式 */
.cursor-receipt {
  max-width: 600px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.receipt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.receipt-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #000;
}

.logo {
  width: 48px;
  height: 48px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 32px;
}

.info-table td {
  padding: 8px 0;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.info-label {
  color: #000;
  width: 140px;
}

.info-value {
  color: #000;
  font-weight: 500;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 40px;
}

.company-section,
.customer-section {
  flex: 1;
}

.company-section p,
.customer-section p {
  margin: 0 0 4px 0;
  font-size: 14px;
  color: #000;
  line-height: 1.4;
}

.company-name {
  font-weight: 600;
  margin-bottom: 8px !important;
}

.section-title {
  font-weight: 600;
  margin-bottom: 8px !important;
  color: #000;
}

.customer-name {
  font-weight: 600;
  margin-bottom: 4px !important;
}

.amount-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 24px 0;
  color: #000;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.items-table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e8e8e8;
}

.items-table td {
  padding: 12px;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e8e8e8;
}

.items-table th:last-child,
.items-table td:last-child {
  text-align: right;
}

.item-description {
  font-weight: 500;
  margin-bottom: 4px;
}

.item-period {
  color: #000;
  font-size: 13px;
}

.totals-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.totals-table td {
  padding: 8px 12px;
  font-size: 14px;
  border-bottom: 1px solid #e8e8e8;
}

.totals-table td:first-child {
  color: #000;
}

.totals-table td:last-child {
  text-align: right;
  color: #000;
  font-weight: 500;
}

.amount-paid-row td {
  font-weight: 600;
  color: #000;
}

.receipt-footer {
  margin-bottom: 40px;
  text-align: center;
}

.receipt-footer p {
  margin: 0;
  font-size: 14px;
  color: #000;
}

.bottom-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #e8e8e8;
  font-size: 13px;
  color: #000;
}



/* 打印样式 */
@media print {
  .print-actions {
    display: none;
  }

  .invoice-content {
    border: none;
    box-shadow: none;
    padding: 20px;
  }

  .invoice-template {
    max-width: none;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .invoice-header {
    flex-direction: column;
    gap: 24px;
  }

  .invoice-content {
    padding: 24px;
  }

  .contact-info {
    flex-direction: column;
    gap: 20px;
  }

  .cursor-receipt {
    max-width: 100%;
  }
}
</style>

<style scoped>
.invoice-template {
  max-width: 800px;
  margin: 0 auto;
}

.print-actions {
  margin-bottom: 24px;
  text-align: right;
}

.print-button {
  background: #1890ff;
  border-color: #1890ff;
  height: 40px;
  padding: 0 24px;
  font-weight: 500;
}

.print-button:hover {
  background: #40a9ff;
  border-color: #40a9ff;
}

.invoice-content {
  background: white;
  padding: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  color: #000;
}

/* Cursor Receipt 样式 */
.cursor-receipt {
  max-width: 600px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.receipt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.receipt-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #000;
}

.cursor-logo {
  width: 48px;
  height: 48px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 32px;
}

.info-table td {
  padding: 8px 0;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.info-label {
  color: #000;
  width: 140px;
}

.info-value {
  color: #000;
  font-weight: 500;
}

.contact-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 40px;
}

.company-section,
.customer-section {
  flex: 1;
}

.company-section p,
.customer-section p {
  margin: 0 0 4px 0;
  font-size: 14px;
  color: #000;
  line-height: 1.4;
}

.company-name {
  font-weight: 600;
  margin-bottom: 8px !important;
}

.section-title {
  font-weight: 600;
  margin-bottom: 8px !important;
  color: #000;
}

.customer-name {
  font-weight: 600;
  margin-bottom: 4px !important;
}

.amount-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 24px 0;
  color: #000;
}

.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.items-table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e8e8e8;
}

.items-table td {
  padding: 12px;
  font-size: 14px;
  color: #000;
  border-bottom: 1px solid #e8e8e8;
}

.items-table th:last-child,
.items-table td:last-child {
  text-align: right;
}

.item-description {
  font-weight: 500;
  margin-bottom: 4px;
}

.item-period {
  color: #000;
  font-size: 13px;
}

.totals-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.totals-table td {
  padding: 8px 12px;
  font-size: 14px;
  border-bottom: 1px solid #e8e8e8;
}

.totals-table td:first-child {
  color: #000;
}

.totals-table td:last-child {
  text-align: right;
  color: #000;
  font-weight: 500;
}

.amount-paid-row td {
  font-weight: 600;
  color: #000;
}

.receipt-footer {
  margin-bottom: 40px;
  text-align: center;
}

.receipt-footer p {
  margin: 0;
  font-size: 14px;
  color: #000;
}

.bottom-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid #e8e8e8;
  font-size: 13px;
  color: #000;
}



/* 打印样式 */
@media print {
  .print-actions {
    display: none;
  }

  .invoice-content {
    border: none;
    box-shadow: none;
    padding: 20px;
  }

  .invoice-template {
    max-width: none;
  }
}



/* 响应式设计 */
@media (max-width: 768px) {
  .invoice-header {
    flex-direction: column;
    gap: 24px;
  }

  .invoice-content {
    padding: 24px;
  }

  .contact-info {
    flex-direction: column;
    gap: 20px;
  }

  .cursor-receipt {
    max-width: 100%;
  }
}
</style>
