const dealer = {
  name: 'Edmunds',
  phone: '(555) 555-5555',
  rating: '5',
};

const vehicle = {
  msrp: 22500,
  name: 'Kia Seltos',
};


const getVehicle = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(vehicle);
  }, 750);
});


const getDealer = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(dealer);
  }, 600);
});

export { getVehicle, getDealer };
