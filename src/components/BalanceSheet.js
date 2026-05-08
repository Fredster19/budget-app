import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function BalanceSheet({ financialData, onDataChange }) {
  const { assets, liabilities } = financialData;

  // Calculate totals
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

  const assetsData = [
    { name: 'Cash/Bank', value: assets.cashBank },
    { name: 'Primary Home', value: assets.primaryHome },
    { name: 'Rental Property', value: assets.rentalProperty },
    { name: '401K/IRA', value: assets.investments401k },
    { name: 'Taxable Investments', value: assets.taxableInvestments },
    { name: 'Personal Business', value: assets.personalBusiness },
    { name: 'Car Value', value: assets.carValue },
    { name: 'Household Goods', value: assets.householdGoods },
  ];

  const liabilitiesData = [
    { name: 'Mortgage Balance', value: liabilities.mortgageBalance },
    { name: 'Home Equity Line', value: liabilities.homeEquityLine },
    { name: 'Car Loan Balance', value: liabilities.carLoanBalance },
    { name: 'School Loans', value: liabilities.schoolLoans },
    { name: 'Medical Debt', value: liabilities.medicalDebt },
  ];

  const assetsVsLiabilities = [
    { name: 'Total Assets', value: totalAssets },
    { name: 'Total Liabilities', value: totalLiabilities },
    { name: 'Net Worth', value: netWorth },
  ];

  const filteredAssets = assetsData.filter(item => item.value > 0);
  const filteredLiabilities = liabilitiesData.filter(item => item.value > 0);

  const COLORS = ['#11998e', '#38ef7d', '#4facfe', '#00f2fe', '#667eea', '#764ba2', '#f093fb', '#ff6a00'];
  const LIABILITY_COLORS = ['#ee0979', '#ff6a00', '#ffa500', '#ff7f50', '#ff6347'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="container">
      <h1 className="section-title">📈 Personal Balance Sheet</h1>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card neutral">
          <h3>Total Assets</h3>
          <div className="value">{formatCurrency(totalAssets)}</div>
        </div>
        <div className="summary-card">
          <h3>Total Liabilities</h3>
          <div className="value">{formatCurrency(totalLiabilities)}</div>
        </div>
        <div className={`summary-card ${netWorth >= 0 ? 'positive' : 'negative'}`}>
          <h3>Net Worth</h3>
          <div className="value">{formatCurrency(netWorth)}</div>
        </div>
      </div>

      {/* Assets Section */}
      <div className="subsection-title">Assets</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Cash (Bank Accounts)</label>
          <input
            type="number"
            value={assets.cashBank}
            onChange={(e) => onDataChange('assets', 'cashBank', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Primary Home (Market Value)</label>
          <input
            type="number"
            value={assets.primaryHome}
            onChange={(e) => onDataChange('assets', 'primaryHome', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Rental Property (Market Value)</label>
          <input
            type="number"
            value={assets.rentalProperty}
            onChange={(e) => onDataChange('assets', 'rentalProperty', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Investments (401K/IRA/403B/TSP)</label>
          <input
            type="number"
            value={assets.investments401k}
            onChange={(e) => onDataChange('assets', 'investments401k', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Taxable Investments (Stocks, Bonds, Mutual Funds)</label>
          <input
            type="number"
            value={assets.taxableInvestments}
            onChange={(e) => onDataChange('assets', 'taxableInvestments', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Personal Business</label>
          <input
            type="number"
            value={assets.personalBusiness}
            onChange={(e) => onDataChange('assets', 'personalBusiness', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Car(s) (Book Value)</label>
          <input
            type="number"
            value={assets.carValue}
            onChange={(e) => onDataChange('assets', 'carValue', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Household Goods (Jewelry, Furniture, Art, etc.)</label>
          <input
            type="number"
            value={assets.householdGoods}
            onChange={(e) => onDataChange('assets', 'householdGoods', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      {/* Liabilities Section */}
      <div className="subsection-title">Liabilities</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Mortgage Balance</label>
          <input
            type="number"
            value={liabilities.mortgageBalance}
            onChange={(e) => onDataChange('liabilities', 'mortgageBalance', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Home Equity Lines</label>
          <input
            type="number"
            value={liabilities.homeEquityLine}
            onChange={(e) => onDataChange('liabilities', 'homeEquityLine', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Car Loan Balance</label>
          <input
            type="number"
            value={liabilities.carLoanBalance}
            onChange={(e) => onDataChange('liabilities', 'carLoanBalance', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>School Loans</label>
          <input
            type="number"
            value={liabilities.schoolLoans}
            onChange={(e) => onDataChange('liabilities', 'schoolLoans', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Outstanding Medical Debt</label>
          <input
            type="number"
            value={liabilities.medicalDebt}
            onChange={(e) => onDataChange('liabilities', 'medicalDebt', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* Assets Distribution */}
        {filteredAssets.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Assets Distribution</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={filteredAssets}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
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
        )}

        {/* Liabilities Distribution */}
        {filteredLiabilities.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Liabilities Breakdown</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredLiabilities}>
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

        {/* Assets vs Liabilities vs Net Worth */}
        <div className="chart-container">
          <div className="chart-title">Assets vs Liabilities vs Net Worth</div>
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

        {/* Detailed Assets Breakdown */}
        {filteredAssets.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Assets Detailed Breakdown</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={filteredAssets}>
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
      </div>
    </div>
  );
}

export default BalanceSheet;