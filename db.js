module.exports = {
  products: [
    {
      id: 1,
      nombre: 'playera casual',
      tipo: 'polo',
      precio: 150,
      talla: ['s', 'm', 'l', 'xl'],
      color: ['negro', 'blanco', 'azul'],
      stock: {
        sur: 20,
        norte: 10,
      },
    },
    {
      id: 2,
      nombre: 'vestido de playa',
      tipo: 'vestido',
      precio: 250,
      talla: ['s', 'm', 'l'],
      color: ['azul', 'rosa'],
      stock: {
        sur: 5,
        norte: 0,
      },
    },
    {
      id: 3,
      nombre: 'bermuda',
      tipo: 'short',
      precio: 200,
      talla: ['s', 'm', 'l', 'xl'],
      color: ['rojo', 'amarillo', 'verde'],
      stock: {
        sur: 6,
        norte: 30,
      },
    }
  ]
}