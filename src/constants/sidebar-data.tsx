import {
  BankOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  RollbackOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export interface MenuItem {
  key: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
  children?: MenuItem[];
  allowedRoles?: string[];
}

import { GiPassport } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const menuItems: MenuItem[] = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "invoice-tour",
    icon: <FileTextOutlined />,
    label: "Invoice (Tour)",

    children: [
      {
        key: "/dashboard/invoice-tour/create",
        label: (
          <Link href="/dashboard/invoice-tour/create">Create Invoice</Link>
        ),
      },
      {
        key: "/dashboard/invoice-tour/all",
        label: <Link href="/dashboard/invoice-tour/all">All Invoices</Link>,
      },
    ],
  },
  {
    key: "invoice-visa",
    icon: <FileTextOutlined />,
    label: "Invoice (Visa)",

    children: [
      {
        key: "/dashboard/invoice-visa/create",
        label: (
          <Link href="/dashboard/invoice-visa/create">Create Invoice</Link>
        ),
      },
      {
        key: "/dashboard/invoice-visa/all",
        label: <Link href="/dashboard/invoice-visa/all">All Invoices</Link>,
      },
    ],
  },
  {
    key: "invoice-air-ticket",
    icon: <FileTextOutlined />,
    label: "Invoice (Air Ticket)",

    children: [
      {
        key: "/dashboard/invoice-air-ticket/create",
        label: (
          <Link href="/dashboard/invoice-air-ticket/create">
            Create Invoice
          </Link>
        ),
      },
      {
        key: "/dashboard/invoice-air-ticket/all",
        label: (
          <Link href="/dashboard/invoice-air-ticket/all">All Invoices</Link>
        ),
      },
    ],
  },
  {
    key: "invoice-hotel",
    icon: <FileTextOutlined />,
    label: "Invoice (Hotel)",

    children: [
      {
        key: "/dashboard/invoice-hotel/create",
        label: (
          <Link href="/dashboard/invoice-hotel/create">Create Invoice</Link>
        ),
      },
      {
        key: "/dashboard/invoice-hotel/all",
        label: <Link href="/dashboard/invoice-hotel/all">All Invoices</Link>,
      },
    ],
  },
  {
    key: "others",
    icon: <FileTextOutlined />,
    label: "Invoice (Others)",

    children: [
      {
        key: "/dashboard/others/create",
        label: <Link href="/dashboard/others/create">Create Invoice</Link>,
      },
      {
        key: "/dashboard/others/all",
        label: <Link href="/dashboard/others/all">All Invoices</Link>,
      },
    ],
  },
  {
    key: "accounts",
    icon: <CreditCardOutlined />,
    label: "Accounts",

    children: [
      {
        key: "/dashboard/accounts",
        label: <Link href="/dashboard/accounts">Accounts</Link>,
      },
      {
        key: "/dashboard/receive-voucher",
        label: <Link href="/dashboard/receive-voucher">Receive Voucher</Link>,
      },
      {
        key: "/dashboard/payment-voucher",
        label: <Link href="/dashboard/payment-voucher">Payment Voucher</Link>,
      },
      {
        key: "/dashboard/contra-voucher",
        label: <Link href="/dashboard/contra-voucher">Contra Voucher</Link>,
      },
      {
        key: "/dashboard/journal-voucher",
        label: <Link href="/dashboard/journal-voucher">Journal Voucher</Link>,
      },
      {
        key: "/dashboard/adjustment-voucher",
        label: (
          <Link href="/dashboard/adjustment-voucher">Adjustment Voucher</Link>
        ),
      },
      {
        key: "/dashboard/cheques",
        label: <Link href="/dashboard/cheques">Cheques</Link>,
      },
    ],
  },
  {
    key: "/dashboard/clients",
    icon: <UserOutlined />,
    label: <Link href="/dashboard/clients">Clients</Link>,
  },
  {
    key: "/dashboard/vendor",
    icon: <UserOutlined />,
    label: <Link href="/dashboard/vendor">Vendors</Link>,
  },
  {
    key: "/dashboard/agents",
    icon: <UserOutlined />,
    label: <Link href="/dashboard/agents">Agents</Link>,
  },
  {
    key: "refund",
    icon: <RollbackOutlined />,
    label: "Refund",

    children: [
      {
        key: "/dashboard/refund/tour-package",
        label: (
          <Link href="/dashboard/refund/tour-package">Tour Package Refund</Link>
        ),
      },
    ],
  },
  {
    key: "reports",
    icon: <FileSearchOutlined />,
    label: "Reports",

    children: [
      {
        key: "system_logs",
        label: "System Logs",

        children: [
          {
            key: "/dashboard/reports/system-logs/audit-trails",
            label: (
              <Link href="/dashboard/reports/system-logs/audit-trails">
                Audit Trails
              </Link>
            ),
          },
        ],
      },
      {
        key: "legers",
        label: "Ledgers",

        children: [
          {
            key: "/dashboard/reports/legers/account-leger",
            label: (
              <Link href="/dashboard/reports/legers/account-leger">
                Account Ledger
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/legers/client-leger",
            label: (
              <Link href="/dashboard/reports/legers/client-leger">
                Client Ledger
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/legers/vendor-leger",
            label: (
              <Link href="/dashboard/reports/legers/vendor-leger">
                Vendor Ledger
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/legers/agent-leger",
            label: (
              <Link href="/dashboard/reports/legers/agent-leger">
                Agent Ledger
              </Link>
            ),
          },
        ],
      },
      {
        key: "sales",
        label: "Sales Report",

        children: [
          {
            key: "/dashboard/reports/sales-report/sales-report",
            label: (
              <Link href="/dashboard/reports/sales-report/sales-report">
                Sales Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/invoice-tour-report",
            label: (
              <Link href="/dashboard/reports/sales-report/invoice-tour-report">
                Invoice Tour Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/invoice-visa-report",
            label: (
              <Link href="/dashboard/reports/sales-report/invoice-visa-report">
                Invoice Visa Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/air-ticket-report",
            label: (
              <Link href="/dashboard/reports/sales-report/air-ticket-report">
                Invoice Air Ticket Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/invoice-hotel-report",
            label: (
              <Link href="/dashboard/reports/sales-report/invoice-hotel-report">
                Invoice Hotel Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/visa-reports",
            label: (
              <Link href="/dashboard/reports/sales-report/visa-reports">
                Visa Item Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/air-ticket-item-report",
            label: (
              <Link href="/dashboard/reports/sales-report/air-ticket-item-report">
                Air Ticket Item Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/hotel-item-report",
            label: (
              <Link href="/dashboard/reports/sales-report/hotel-item-report">
                Hotel Item Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/transport-item-report",
            label: (
              <Link href="/dashboard/reports/sales-report/transport-item-report">
                Transport Item Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/sales-report/food-item-report",
            label: (
              <Link href="/dashboard/reports/sales-report/food-item-report">
                Food Item Report
              </Link>
            ),
          },
        ],
      },
      {
        key: "accountReports",
        label: "Account Report",

        children: [
          {
            key: "/dashboard/reports/account/account-report",
            label: (
              <Link href="/dashboard/reports/account/account-report">
                Account Report
              </Link>
            ),
          },
          {
            key: "/dashboard/reports/account/account-statement",
            label: (
              <Link href="/dashboard/reports/account/account-statement">
                Account Statement
              </Link>
            ),
          },
        ],
      },
      {
        key: "/dashboard/reports/client-due-advanced-report",
        label: (
          <Link href="/dashboard/reports/client-due-advanced-report">
            Client Wise Due/Advanced
          </Link>
        ),
      },
      {
        key: "/dashboard/reports/vendor-due-advanced-report",
        label: (
          <Link href="/dashboard/reports/vendor-due-advanced-report">
            Vendor Wise Due/Advanced
          </Link>
        ),
      },
      {
        key: "/dashboard/reports/receive-voucher-report",
        label: (
          <Link href="/dashboard/reports/receive-voucher-report">
            Receive Voucher Report
          </Link>
        ),
      },
      {
        key: "/dashboard/reports/payment-voucher-report",
        label: (
          <Link href="/dashboard/reports/payment-voucher-report">
            Payment Voucher Report
          </Link>
        ),
      },
      {
        key: "/dashboard/reports/expense-report",
        label: (
          <Link href="/dashboard/reports/expense-report">Expense Report</Link>
        ),
      },
      {
        key: "/dashboard/reports/day-book",
        label: <Link href="/dashboard/reports/day-book">Day Book</Link>,
      },
      {
        key: "/dashboard/reports/balance-sheet",
        label: (
          <Link href="/dashboard/reports/balance-sheet">Balance Sheet</Link>
        ),
      },
      {
        key: "/dashboard/reports/overall-profit-loss",
        label: (
          <Link href="/dashboard/reports/overall-profit-loss">
            Overall Profit Loss
          </Link>
        ),
      },
    ],
  },
  {
    key: "configuration",
    icon: <SettingOutlined />,
    label: "Configuration",

    children: [
      {
        key: "products",
        icon: <MdOutlineProductionQuantityLimits />,
        label: "Products",

        children: [
          {
            key: "/dashboard/configuration/products/all-products",
            label: (
              <Link href="/dashboard/configuration/products/all-products">
                All Products
              </Link>
            ),
          },
          {
            key: "/dashboard/configuration/products/inventory",
            label: (
              <Link href="/dashboard/configuration/products/inventory">
                Inventory
              </Link>
            ),
          },
        ],
      },

      {
        key: "/dashboard/configuration/passport",
        icon: <GiPassport />,
        label: <Link href="/dashboard/configuration/passport">Passport</Link>,
      },
      {
        key: "/dashboard/configuration/employee",
        icon: <UsergroupAddOutlined />,
        label: <Link href="/dashboard/configuration/employee">Employee</Link>,
      },
      {
        key: "users",
        icon: <UserOutlined />,
        label: "Users",

        children: [
          {
            key: "/dashboard/configuration/users/all",
            label: (
              <Link href="/dashboard/configuration/users/all">View Users</Link>
            ),
          },
          {
            key: "/dashboard/configuration/users/roles",
            label: (
              <Link href="/dashboard/configuration/users/roles">
                View Roles
              </Link>
            ),
          },
        ],
      },
      {
        key: "/dashboard/configuration/tour-group",
        icon: <UsergroupAddOutlined />,
        label: (
          <Link href="/dashboard/configuration/tour-group">Tour Groups</Link>
        ),
      },
      {
        key: "/dashboard/configuration/expense-head",
        icon: <MdOutlineProductionQuantityLimits />,
        label: (
          <Link href="/dashboard/configuration/expense-head">Expense Head</Link>
        ),
      },
      {
        key: "company",
        icon: <BankOutlined />,
        label: "Company",

        children: [
          {
            key: "/dashboard/configuration/company/info",
            label: (
              <Link href="/dashboard/configuration/company/info">
                Company Info
              </Link>
            ),
          },
          {
            key: "/dashboard/configuration/company/config",
            label: (
              <Link href="/dashboard/configuration/company/config">
                Company Config
              </Link>
            ),
          },
        ],
      },
      {
        key: "/dashboard/configuration/download-db",
        icon: <DatabaseOutlined />,
        label: (
          <Link href="/dashboard/configuration/download-db">
            Database Backup
          </Link>
        ),
      },
    ],
  },
];
