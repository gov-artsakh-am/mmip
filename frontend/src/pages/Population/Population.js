import React from 'react';
import Table from '../../components/Table/Table';
import './Population.css';
import dummy from '../../assets/vectors/dummy.png';

const data = [
  {
    id: '123',
    family: { logo: dummy, label: 'Ազիզյաններ' },
    members: 'members',
    hamaynq: 'hamaynq',
    bnakavayr: 'bnakavayr',
    address: ['address1', 'address2', 'address3'],
  },
  {
    id: '123',
    family: { logo: dummy, label: 'Ազիզյաններ' },
    members: 'members',
    hamaynq: 'hamaynq',
    bnakavayr: 'bnakavayr',
    address: ['address3'],
  },
];

const Population = () => (
  <div className="populationContainer">
    <Table data={data} />
  </div>
);

export default Population;
