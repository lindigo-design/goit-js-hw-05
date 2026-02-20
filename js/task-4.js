const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .map(user => user.balance)
    .reduce((total, balance) => total + balance, 0);
    