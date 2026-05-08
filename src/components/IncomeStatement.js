import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function IncomeStatement({ financialData, onDataChange }) {
  const { income, expenses } = financialData;

  // Calculate metrics
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
  const netIncome = monthlyIncome - totalExpenses;
  const disposableIncome = netIncome;

  const needsItems = [
    { name: 'IRA/401K', value: expenses.ira401k },
    { name: 'Medical', value: expenses.medical },
    { name: 'Mortgage/Rent', value: expenses.mortgage },
    { name: 'Car Payments', value: expenses.carPayments },
    { name: 'Car Insurance', value: expenses.carInsurance },
    { name: 'Life Insurance', value: expenses.lifeInsurance },
    { name: 'Gas', value: expenses.gas },
    { name: 'Electric', value: expenses.electric },
    { name: 'Water', value: expenses.water },
    { name: 'Sewer', value: expenses.sewer },
    { name: 'Trash', value: expenses.trash },
    { name: 'Food', value: expenses.food },
    { name: 'School', value: expenses.school },
    { name: 'Phone', value: expenses.phone },
    { name: 'Cable', value: expenses.cable },
    { name: 'Safety Net', value: expenses.safetyNet },
  ];

  const wantsItems = [
    { name: 'Entertainment', value: expenses.entertainment },
    { name: 'College Funds (529)', value: expenses.college529 },
  ];

  const incomeBreakdown = [
    { name: 'Needs', value: totalNeeds },
    { name: 'Wants', value: totalWants },
    { name: 'Net Income', value: disposableIncome },
  ];

  const needsBreakdown = needsItems.filter(item => item.value > 0);

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#11998e', '#38ef7d'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="container">
      <h1 className="section-title">💵 Personal Income Statement</h1>

      {/* Income Section */}
      <div className="subsection-title">Income</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Annual Salary</label>
          <input
            type="number"
            value={income.annualSalary}
            onChange={(e) => onDataChange('income', 'annualSalary', e.target.value)}
            placeholder="Enter annual salary"
          />
        </div>
      </div>

      {/* Monthly Income Calculation */}
      <div className="stats-grid">
        <div className="stat-item">
          <div className="label">Monthly Income (Calculated)</div>
          <div className="value">{formatCurrency(monthlyIncome)}</div>
        </div>
        <div className="stat-item">
          <div className="label">Total Monthly Expenses</div>
          <div className="value">{formatCurrency(totalExpenses)}</div>
        </div>
        <div className={`stat-item ${netIncome >= 0 ? '' : ''}`}>
          <div className="label">Net Monthly Income</div>
          <div className="value" style={{ color: netIncome >= 0 ? '#11998e' : '#ee0979' }}>
            {formatCurrency(netIncome)}
          </div>
        </div>
      </div>

      {/* Needs Section */}
      <div className="subsection-title">Monthly Costs (Needs)</div>
      <div className="form-grid">
        <div className="form-group">
          <label>IRA/401K</label>
          <input
            type="number"
            value={expenses.ira401k}
            onChange={(e) => onDataChange('expenses', 'ira401k', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Medical Expenses</label>
          <input
            type="number"
            value={expenses.medical}
            onChange={(e) => onDataChange('expenses', 'medical', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Mortgage/Rent</label>
          <input
            type="number"
            value={expenses.mortgage}
            onChange={(e) => onDataChange('expenses', 'mortgage', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Car Payments</label>
          <input
            type="number"
            value={expenses.carPayments}
            onChange={(e) => onDataChange('expenses', 'carPayments', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Car Insurance</label>
          <input
            type="number"
            value={expenses.carInsurance}
            onChange={(e) => onDataChange('expenses', 'carInsurance', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Life Insurance</label>
          <input
            type="number"
            value={expenses.lifeInsurance}
            onChange={(e) => onDataChange('expenses', 'lifeInsurance', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Gas</label>
          <input
            type="number"
            value={expenses.gas}
            onChange={(e) => onDataChange('expenses', 'gas', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Electric</label>
          <input
            type="number"
            value={expenses.electric}
            onChange={(e) => onDataChange('expenses', 'electric', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Water</label>
          <input
            type="number"
            value={expenses.water}
            onChange={(e) => onDataChange('expenses', 'water', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Sewer</label>
          <input
            type="number"
            value={expenses.sewer}
            onChange={(e) => onDataChange('expenses', 'sewer', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Trash Removal</label>
          <input
            type="number"
            value={expenses.trash}
            onChange={(e) => onDataChange('expenses', 'trash', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Food</label>
          <input
            type="number"
            value={expenses.food}
            onChange={(e) => onDataChange('expenses', 'food', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>School</label>
          <input
            type="number"
            value={expenses.school}
            onChange={(e) => onDataChange('expenses', 'school', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="number"
            value={expenses.phone}
            onChange={(e) => onDataChange('expenses', 'phone', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Cable/Internet</label>
          <input
            type="number"
            value={expenses.cable}
            onChange={(e) => onDataChange('expenses', 'cable', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>Safety Net/Home Repair</label>
          <input
            type="number"
            value={expenses.safetyNet}
            onChange={(e) => onDataChange('expenses', 'safetyNet', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      {/* Wants Section */}
      <div className="subsection-title">Disposable Income (Wants)</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Entertainment (Restaurants, Vacations, Concerts, etc.)</label>
          <input
            type="number"
            value={expenses.entertainment}
            onChange={(e) => onDataChange('expenses', 'entertainment', e.target.value)}
            placeholder="0"
          />
        </div>
        <div className="form-group">
          <label>529 or College Funds</label>
          <input
            type="number"
            value={expenses.college529}
            onChange={(e) => onDataChange('expenses', 'college529', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-container">
          <div className="chart-title">Monthly Income Distribution</div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={incomeBreakdown}
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

        {needsBreakdown.length > 0 && (
          <div className="chart-container">
            <div className="chart-title">Needs Breakdown</div>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={needsBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Bar dataKey="value" fill="#667eea" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default IncomeStatement;