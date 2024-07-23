import React from 'react';
import {Text} from '@/core-ui/text/Text';
import {Table} from './Table';
import './planPricing.css';

const data = [
  {
    id: 1,
    data1: 'Contract',
    data2: '3 Months',
    data3: '8 Months',
    data4: '12 Months',
  },
  {
    id: 2,
    data1: 'Pay Monthly',
    data2: 'RP4.500.000',
    data3: 'Rp4.000.000',
    data4: 'Rp3.600.000',
  },
  {
    id: 3,
    data1: 'Full Payment (Save Over 40%**)',
    data2: 'Rp13.500.000',
    data3: 'Rp36.000.000',
    data4: 'Rp54.000.000',
  },
  {
    id: 4,
    data1: 'Free Maintenance Fee',
    data2: '✔',
    data3: '✔',
    data4: '✔',
  },
  {
    id: 5,
    data1: 'Free Monitoring Fee',
    data2: '✔',
    data3: '✔',
    data4: '✔',
  },
  {
    id: 6,
    data1: 'Free Content Update (every 3 month)',
    data2: '-',
    data3: '✔',
    data4: '✔',
  },
  {
    id: 7,
    data1: 'Instalation Fee',
    data2: 'Rp200.000',
    data3: 'Rp200.000',
    data4: 'FREE',
  },
  {
    id: 8,
    data1: 'Free Additional Month',
    data2: '-',
    data3: '1 Month',
    data4: '3 Months',
  },
];

const tableHeaders = ['', 'Standard', 'Premium', 'VIP'];
const tableBodies = ['data1', 'data2', 'data3', 'data4'];

export default function PlanPricing() {
  return (
    <div className="plan-container">
      <Text size="header" content="RENCANA DAN HARGA" />
      <div className="table-harga">
        <Table
          data={data}
          tableHeaders={tableHeaders}
          tableBodies={tableBodies}
        />
      </div>
    </div>
  );
}
