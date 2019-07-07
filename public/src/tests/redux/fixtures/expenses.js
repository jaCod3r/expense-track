import moment from 'moment';


export const expenses = [
  { id: '1', description: 'Gum', note: '', amount: 200, createdAt: 0 },
  { id: '2', description: 'Rent', note: '', amount: 20000, createdAt: moment(0).subtract(3, 'days').valueOf() },
  { id: '3', description: 'Credit Card', note: '', amount: 1001, createdAt: moment(0).add(3, 'days').valueOf() },
]