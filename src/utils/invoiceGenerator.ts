import type {
  InvoiceData,
  InvoiceTemplate,
  BillToInfo,
  InvoiceType,
} from "@/types";

// Windsurf Invoice模板配置
export const windsurfTemplate: InvoiceTemplate = {
  type: "windsurf",
  name: "Windsurf Invoice",
  price: 6.9,
  logo: "/windsurf-logo.png",
  companyInfo: {
    name: "Windsurf",
    address: [
      "900 Villa Street",
      "Mountain View, California 94041",
      "United States",
    ],
    email: "noreply@windsurf.com",
    phone: "",
    taxInfo: "EU OSS VAT EU372077851",
  },
  productName: "Windsurf Pro",
};

// Cursor Invoice模板配置
export const cursorTemplate: InvoiceTemplate = {
  type: "cursor",
  name: "Cursor Invoice",
  price: 20.0,
  logo: "/cursor-logo.png",
  companyInfo: {
    name: "Cursor AI Inc.",
    address: ["456 Tech Boulevard", "Palo Alto, CA 94301", "United States"],
    email: "billing@cursor.com",
    phone: "+1 (555) 987-6543",
    taxInfo: "98-7654321",
  },
  productName: "Cursor Pro License",
};

// Invoice模板映射
export const invoiceTemplates: Record<InvoiceType, InvoiceTemplate> = {
  windsurf: windsurfTemplate,
  cursor: cursorTemplate,
};

// 随机支付方式
const paymentMethods = [
  "Visa ending in 4242",
  "MasterCard ending in 8888",
  "American Express ending in 1005",
  "Discover ending in 6789",
  "PayPal (user@example.com)",
  "Apple Pay",
  "Google Pay",
];

// 随机姓名 - 更多样化的国际化姓名
const firstNames = [
  "Daniel",
  "John",
  "Jane",
  "Michael",
  "Sarah",
  "David",
  "Emily",
  "Robert",
  "Lisa",
  "William",
  "Jennifer",
  "James",
  "Mary",
  "Christopher",
  "Patricia",
  "Linda",
  "Matthew",
  "Elizabeth",
  "Anthony",
  "Barbara",
  "Maria",
  "Carlos",
  "Ana",
  "Jose",
  "Carmen",
  "Luis",
  "Sofia",
  "Miguel",
  "Elena",
  "Pablo",
  "Zhou",
  "Wang",
  "Li",
  "Zhang",
  "Chen",
  "Liu",
  "Yang",
  "Huang",
  "Zhao",
  "Wu",
  "Hiroshi",
  "Yuki",
  "Takeshi",
  "Akiko",
  "Kenji",
  "Naomi",
  "Satoshi",
  "Emi",
  "Daisuke",
  "Rei",
  "Pierre",
  "Marie",
  "Jean",
  "Sophie",
  "Antoine",
  "Camille",
  "Nicolas",
  "Julie",
  "Alexandre",
  "Chloe",
];

const lastNames = [
  "Moore",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Jackson",
  "Martin",
  "Wagner",
  "Mueller",
  "Schmidt",
  "Schneider",
  "Fischer",
  "Weber",
  "Meyer",
  "Richter",
  "Klein",
  "Wolf",
  "Ming",
  "Wei",
  "Feng",
  "Lei",
  "Jun",
  "Bin",
  "Qiang",
  "Gang",
  "Jian",
  "Ping",
  "Tanaka",
  "Suzuki",
  "Takahashi",
  "Watanabe",
  "Ito",
  "Yamamoto",
  "Nakamura",
  "Kobayashi",
  "Kato",
  "Yoshida",
  "Dupont",
  "Martin",
  "Bernard",
  "Dubois",
  "Thomas",
  "Robert",
  "Petit",
  "Durand",
  "Leroy",
  "Moreau",
];

// 随机地址
const streets = [
  "Main Street",
  "Oak Avenue",
  "Pine Road",
  "Maple Drive",
  "Cedar Lane",
  "Elm Street",
  "Park Avenue",
  "First Street",
  "Second Avenue",
  "Third Street",
  "Wall Street",
  "Madison Avenue",
  "Fifth Avenue",
  "Sunset Boulevard",
  "Hollywood Boulevard",
  "Rodeo Drive",
  "Broadway",
  "Times Square",
  "Central Park West",
  "Champs-Élysées",
  "Rue de Rivoli",
  "Avenue Montaigne",
  "Boulevard Saint-Germain",
  "Rue du Faubourg",
  "Unter den Linden",
  "Kurfürstendamm",
  "Friedrichstraße",
  "Potsdamer Platz",
  "Alexanderplatz",
  "Ginza",
  "Shibuya",
  "Harajuku",
  "Omotesando",
  "Akasaka",
  "Roppongi",
  "Shinjuku",
  "Ikebukuro",
];

const cities = [
  { name: "New York", state: "NY", zip: "10001" },
  { name: "Los Angeles", state: "CA", zip: "90210" },
  { name: "Chicago", state: "IL", zip: "60601" },
  { name: "Houston", state: "TX", zip: "77001" },
  { name: "Phoenix", state: "AZ", zip: "85001" },
  { name: "Philadelphia", state: "PA", zip: "19101" },
  { name: "San Antonio", state: "TX", zip: "78201" },
  { name: "San Diego", state: "CA", zip: "92101" },
  { name: "Dallas", state: "TX", zip: "75201" },
  { name: "San Jose", state: "CA", zip: "95101" },
  { name: "Miami", state: "FL", zip: "33101" },
  { name: "Seattle", state: "WA", zip: "98101" },
  { name: "Boston", state: "MA", zip: "02101" },
  { name: "Denver", state: "CO", zip: "80201" },
  { name: "Las Vegas", state: "NV", zip: "89101" },
  { name: "Atlanta", state: "GA", zip: "30301" },
  { name: "Portland", state: "OR", zip: "97201" },
  { name: "Nashville", state: "TN", zip: "37201" },
  { name: "Austin", state: "TX", zip: "73301" },
  { name: "San Francisco", state: "CA", zip: "94101" },
];

// 生成随机数字
const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 生成随机字符串
const randomString = (length: number): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// 生成随机日期（最近30天内）
const randomDate = (): string => {
  const now = new Date();
  const daysAgo = randomInt(1, 30);
  const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// 生成随机收票人信息
const generateBillToInfo = (email: string): BillToInfo => {
  const firstName = firstNames[randomInt(0, firstNames.length - 1)];
  const lastName = lastNames[randomInt(0, lastNames.length - 1)];
  const streetNumber = randomInt(100, 9999);
  const street = streets[randomInt(0, streets.length - 1)];
  const city = cities[randomInt(0, cities.length - 1)];

  return {
    name: `${firstName.toUpperCase()} ${lastName.toUpperCase()}`,
    email: email,
    address: [
      `${streetNumber} ${street}`,
      `${city.name}, ${city.state} ${city.zip}`,
      "United States",
    ],
  };
};

// 生成Invoice数据 - 支持Windsurf和Cursor类型
export const generateInvoiceData = (
  email: string,
  type: InvoiceType
): InvoiceData => {
  const template = invoiceTemplates[type];
  const invoiceNumber = `INV-${randomString(8)}`;
  const receiptNumber = `RCP-${randomString(6)}`;
  const paymentMethod = paymentMethods[randomInt(0, paymentMethods.length - 1)];
  const billTo = generateBillToInfo(email);
  const datePaid = randomDate();

  // 计算金额
  const subtotal = template.price;
  const total = subtotal;
  const amountPaid = total;

  // 生成期间描述
  const currentDate = new Date();
  const nextMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );
  const period = `${currentDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })} - ${nextMonth.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })}`;

  return {
    id: `invoice-${Date.now()}`,
    type,
    invoiceNumber,
    receiptNumber,
    datePaid,
    paymentMethod,
    billTo,
    amount: template.price,
    currency: "USD",
    description: template.productName,
    period,
    subtotal,
    total,
    amountPaid,
  };
};

// 格式化金额
export const formatCurrency = (
  amount: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount);
};

// 验证邮箱格式
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 打印PDF功能 - 使用canvas生成图片，然后iframe显示并打印
export const printInvoice = async (): Promise<void> => {
  const invoiceContent = document.getElementById("invoice-content");
  if (!invoiceContent) {
    console.error("Invoice content not found");
    return;
  }

  try {
    // 动态导入html2canvas
    const html2canvas = (await import("html2canvas")).default;

    // 使用html2canvas将DOM元素转换为canvas
    const canvas = await html2canvas(invoiceContent, {
      scale: 2, // 提高分辨率
      useCORS: true, // 允许跨域图片
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: invoiceContent.scrollWidth,
      height: invoiceContent.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    // 获取canvas的数据URL
    const imgData = canvas.toDataURL("image/png");

    // 创建iframe
    const iframe = document.createElement("iframe");
    iframe.style.position = "absolute";
    iframe.style.top = "-9999px";
    iframe.style.left = "-9999px";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    // 获取iframe的document
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      console.error("Cannot access iframe document");
      document.body.removeChild(iframe);
      return;
    }

    // 写入包含图片的HTML内容
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Invoice</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            background: white;
            padding: 10mm;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          .print-container {
            width: 100%;
            text-align: center;
          }

          .invoice-image {
            max-width: 100%;
            height: auto;
            border: none;
          }

          @media print {
            body {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }

            .print-container {
              width: 100%;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .invoice-image {
              max-width: 100%;
              max-height: 100%;
              object-fit: contain;
            }

            @page {
              margin: 0;
              size: A4;
            }
          }
        </style>
      </head>
      <body>
        <div class="print-container">
          <img src="${imgData}" alt="Invoice" class="invoice-image" />
        </div>
        <script>
          // 打印功能由外部iframe.onload处理，这里不需要重复调用
          window.onload = function() {
            // 页面加载完成，等待外部调用打印
          };
        </script>
      </body>
    `);
    iframeDoc.close();

    // 等待内容加载完成后打印
    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
        } catch (error) {
          console.error("Print failed:", error);
        }

        // 打印完成后移除iframe
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 1000);
      }, 100);
    };
  } catch (error) {
    console.error("Canvas print failed:", error);
    // 如果canvas失败，回退到简单的window.print()
    window.print();
  }
};
