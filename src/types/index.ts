// Invoice类型枚举 - 现在只支持Cursor
export type InvoiceType = "windsurf" | "cursor";

// Invoice数据接口
export interface InvoiceData {
  id: string;
  type: InvoiceType;
  invoiceNumber: string;
  receiptNumber: string;
  datePaid: string;
  paymentMethod: string;
  billTo: BillToInfo;
  amount: number;
  currency: string;
  description: string;
  period: string;
  subtotal: number;
  total: number;
  amountPaid: number;
}

// 收票人信息
export interface BillToInfo {
  name: string;
  email: string;
  address: string[];
}

// Invoice模板配置
export interface InvoiceTemplate {
  type: InvoiceType;
  name: string;
  price: number;
  logo: string;
  companyInfo: CompanyInfo;
  productName: string;
}

// 公司信息
export interface CompanyInfo {
  name: string;
  address: string[];
  email: string;
  phone?: string;
  taxInfo?: string;
}

// 表单数据 - 简化为只需要邮箱
export interface FormData {
  email: string;
  invoiceType: InvoiceType;
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}
