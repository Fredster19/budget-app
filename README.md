# 💰 Personal Finance Dashboard - Budget App

A comprehensive React-based personal finance management application for tracking income, expenses, assets, and liabilities.

## ✨ Features

### 📊 Dashboard Summary
- **Financial Overview**: View all key financial metrics at a glance
- **Monthly Income Display**: Auto-calculated from annual salary
- **Monthly Expenses**: Tracks all costs (needs and wants)
- **Net Income**: Remaining disposable income
- **Net Worth Calculation**: Assets minus liabilities
- **Financial Health Indicators**:
  - Savings Rate (%)
  - Debt-to-Asset Ratio (%)
  - Total Assets & Liabilities

### 💵 Income Statement (Monthly Budget)

**Income Section:**
- Annual Salary input
- Auto-calculated monthly income (Salary ÷ 52 × 4.33)

**Needs (Fixed Costs):**
- IRA/401K contributions
- Medical expenses
- Mortgage/Rent
- Car payments
- Car & Life Insurance
- Utilities (Gas, Electric, Water, Sewer, Trash)
- Food
- School costs
- Phone & Cable
- Safety Net/Home Repair fund

**Wants (Discretionary):**
- Entertainment (restaurants, vacations, concerts, events)
- College funds (529)

**Calculations:**
- Total Monthly Income
- Total Needs
- Total Wants
- Disposable Income (remaining after expenses)
- Net Income

### 📈 Balance Sheet

**Assets:**
- Cash (Bank accounts)
- Primary Home (Market value)
- Rental Property (Market value)
- Investments (401K/IRA/403B/TSP/529 - Tax deferred)
- Taxable Investments (Stocks, Bonds, Mutual Funds)
- Personal Business
- Car(s) (Book value)
- Household Goods (Jewelry, Furniture, Art, Silver, etc.)

**Liabilities:**
- Mortgage Balance
- Home Equity Lines
- Car Loan Balance
- School Loans
- Outstanding Medical Debt

**Calculations:**
- Total Assets
- Total Liabilities
- **Net Worth = Assets - Liabilities**

### 📊 Visualizations

The app includes multiple interactive charts:
- **Pie Charts**: Income distribution, asset allocation
- **Bar Charts**: Expense breakdown, liabilities breakdown
- **Comparison Charts**: Assets vs Liabilities

All charts update in real-time as you enter data.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Fredster19/budget-app.git
cd budget-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📱 Usage

1. **Enter Your Income**: Start by entering your annual salary on the Income Statement page
2. **Track Your Expenses**: Fill in all monthly expenses across needs and wants categories
3. **Add Your Assets**: Enter all your assets on the Balance Sheet page
4. **Add Your Liabilities**: Enter all your debts and liabilities
5. **Review Your Dashboard**: Check the Summary Dashboard to see all your financial metrics and visualizations

## 💾 Data Storage

- All data is automatically saved to your browser's localStorage
- Your data persists even after closing the browser
- No server login or account needed for the MVP

## 🔄 Future Enhancements

- Backend database integration (Node.js, Python, Firebase, etc.)
- User authentication and accounts
- Monthly/yearly tracking and comparisons
- Budget goals and alerts
- Mobile app version
- PDF export functionality
- Multi-user support
- Advanced analytics and forecasting

## 🛠️ Technology Stack

- **React 18.2**: UI framework
- **Recharts**: Interactive data visualizations
- **CSS3**: Responsive styling
- **localStorage**: Client-side data persistence

## 📄 Project Structure

```
budget-app/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── App.js                  # Main app component
│   ├── App.css                 # App styling
│   ├── index.js                # React entry point
│   ├── index.css               # Global styling
│   └── components/
│       ├── Navigation.js        # Navigation bar
│       ├── Navigation.css
│       ├── Summary.js           # Dashboard page
│       ├── IncomeStatement.js   # Budget tracking page
│       ├── BalanceSheet.js      # Net worth tracking page
│       └── (CSS files for each)
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 📞 Support

For issues or feature requests, please open a GitHub issue.

## 📜 License

This project is open source and available under the MIT License.

---

**Happy Budgeting!** 💰📈
