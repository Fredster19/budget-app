import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Summary({ financialData }) {
  const { income, expenses, assets, liabilities } = financialData;

  // Calculate income metrics
  const monthlyIncome = (income.annualSalary / 52) * 4.33;
  const totalNeeds =
    expenses.ira401k +
    expenses.medical +
    expenses.mortgage +
    expenses.carPayments +
    expenses.carInsurance +
    expenses.lifeInsurance +
    expenses.gas +
    expenses.electric +
    expenses.water +
    expenses.sewer +
    expenses.trash +
    expenses.food +
    expenses.school +
    expenses.phone +
    expenses.cable +
    expenses.safetyNet;
  const totalWants = expenses.entertainment + expenses.college529;
  const totalExpenses = totalNeeds + totalWants;
  const disposableIncome = monthlyIncome - totalExpenses;

  // Calculate balance sheet metrics
  const totalAssets =
    assets.cashBank +
    assets.primaryHome +
    assets.rentalProperty +
    assets.investments401k +
    assets.taxableInvestments +
    assets.personalBusiness +
    assets.carValue +
    assets.householdGoods;

  const totalLiabilities =
    liabilities.mortgageBalance +
    liabilities.homeEquityLine +
    liabilities.carLoanBalance +
    liabilities.schoolLoans +
    liabilities.medicalDebt;

  const netWorth = totalAssets - totalLiabilities;

  // Calculate financial metrics
  const savingsRate = monthlyIncome > 0 ? ((disposableIncome / monthlyIncome) * 100).toFixed(1) : 0;
  const debtToAssetRatio = totalAssets > 0 ? ((totalLiabilities / totalAssets) * 100).toFixed(1) : 0;
  const monthlyNetIncome = disposableIncome;

  // Data for charts
  const incomeDistribution = [
    { name: 'Needs', value: totalNeeds, percentage: ((totalNeeds / monthlyIncome) * 100).toFixed(1) },
    { name: 'Wants', value: totalWants, percentage: ((totalWants / monthlyIncome) * 100).toFixed(1) },
    { name: 'Remaining', value: disposableIncome, percentage: ((disposableIncome / monthlyIncome) * 100).toFixed(1) },
  ];

  const assetsData = [
    { name: 'Cash', value: assets.cashBank },
    { name: 'Home', value: assets.primaryHome },
    { name: 'Rental', value: assets.rentalProperty },
    { name: 'Investments', value: assets.investments401k + assets.taxableInvestments },
    { name: 'Business', value: assets.personalBusiness },
    { name: 'Cars', value: assets.carValue },
    { name: 'Goods', value: assets.householdGoods },
  ].filter(item => item.value > 0);

  const liabilitiesData = [
    { name: 'Mortgage', value: liabilities.mortgageBalance },
    { name: 'HELOC', value: liabilities.homeEquityLine },
    { name: 'Car Loan', value: liabilities.carLoanBalance },
    { name: 'School', value: liabilities.schoolLoans },
    { name: 'Medical', value: liabilities.medicalDebt },
  ].filter(item => item.value > 0);

  const assetsVsLiabilities = [
    { name: 'Assets', value: totalAssets },
    { name: 'Liabilities', value: totalLiabilities },
  ];

  const COLORS = ['#667eea', '#764ba2', '#f093fb'];
  const ASSET_COLORS = ['#11998e', '#38ef7d', '#4facfe', '#00f2fe', '#667eea', '#764ba2', '#f093fb'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="container">
      <h1 className="section-title">📊 Financial Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card neutral">
          <h3>Monthly Income</h3>
          <div className="value">{formatCurrency(monthlyIncome)}</div>
          <div className="subtext">From annual salary</div>
        </div>
        <div className="summary-card">
          <h3>Monthly Expenses</h3>
          <div className="value">{formatCurrency(totalExpenses)}</div>
          <div className="subtext">Needs + Wants</div>
        </div>
        <div className={`summary-card ${disposableIncome >= 0 ? 'positive' : 'negative'}`}>
          <h3>Monthly Net Income</h3>
          <div className="value">{formatCurrency(disposableIncome)}</div>
          <div className="subtext">Remaining after expenses</div>
        </div>
        <div className="summary-card">
          <h3>Net Worth</h3>
          <div className="value">{formatCurrency(netWorth)}</div>
          <div className="subtext">Assets - Liabilities</div>
        </div>
      </div>

      {/* Financial Health Metrics */}
      <div className="stats-grid">
        <div className="stat-item">
          <div className="label">Savings Rate</div>
          <div className="value">{savingsRate}%</div>
        </div>
        <div className="stat-item">
          <div className="label">Debt to Asset Ratio</div>
          <div className="value">{debtToAssetRatio}%</div>
        </div>
        <div className="stat-item">
          <div className="label">Total Assets</div>
          <div className="value">{formatCurrency(totalAssets)}</div>
        </div>
        <div className="stat-item">
          <div className="label">Total Liabilities</div>
          <div className="value">{formatCurrency(totalLiabilities)}</div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* Income Distribution */}
        <div className="chart-container">
          <div className="chart-title">Income Distribution (Monthly)</div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incomeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Assets vs Liabilities */}
        <div className="chart-container">
          <div className="chart-title">Assets vs Liabilities</div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={assetsVsLiabilities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => formatCurrency(value)} />
                <Bar dataKey="value" fill="#667eea" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Assets Breakdown */}
        {assetsData.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Assets Breakdown</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assetsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="value" fill="#38ef7d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Liabilities Breakdown */}
        {liabilitiesData.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Liabilities Breakdown</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={liabilitiesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="value" fill="#ff6a00" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Summary;