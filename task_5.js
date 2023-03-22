const arr = [
    new Date('2022-11-14'),
    new Date('2022-09-24'),
    new Date('2020-07-17'),
  ];
  
  const max = new Date(Math.max(...arr));
  console.log(max); 