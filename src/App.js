import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import IncomeStatement from './components/IncomeStatement';
import BalanceSheet from './components/BalanceSheet';

function App() {
  const [currentPage, setCurrentPage] = useState('summary');
  const [financialData, setFinancialData] = useState({
    income: {
      annualSalary: 0,
    },
    expenses: {
      ira401k: 0,
      medical: 0,
      mortgage: 0,
      carPayments: 0,
      carInsurance: 0,
      lifeInsurance: 0,
      gas: 0,
      electric: 0,
      water: 0,
      sewer: 0,
      trash: 0,
      food: 0,
      school: 0,
      phone: 0,
      cable: 0,
      safetyNet: 0,
      entertainment: 0,
      college529: 0,
    },
    assets: {
      cashBank: 0,
      primaryHome: 0,
      rentalProperty: 0,
      investments401k: 0,
      taxableInvestments: 0,
      personalBusiness: 0,
      carValue: 0,
      householdGoods: 0,
    },
    liabilities: {
      mortgageBalance: 0,
      homeEquityLine: 0,
      carLoanBalance: 0,
      schoolLoans: 0,
      medicalDebt: 0,
    },
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('budgetAppData');
    if (savedData) {
      try {
        setFinancialData(JSON.parse(savedData));
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('budgetAppData', JSON.stringify(financialData));
  }, [financialData]);

  const handleDataChange = (category, field, value) => {
    setFinancialData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: parseFloat(value) || 0,
      },
    }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'summary':
        return <Summary financialData={financialData} />;
      case 'income':
        return (
          <IncomeStatement
            financialData={financialData}
            onDataChange={handleDataChange}
          />
        );
      case 'balance':
        return (
          <BalanceSheet
            financialData={financialData}
            onDataChange={handleDataChange}
          />
        );
      default:
        return <Summary financialData={financialData} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;