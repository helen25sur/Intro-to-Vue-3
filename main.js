const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      // descr: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf.',
      image: './assets/images/socks_green.jpg',
      // url: 'https://www.linkedin.com/in/olena-surilova-8aa66b122/',
      inventory: 100,
      // onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      // sizes: ['S', 'M', 'L', 'XL', 'XXl']
    }
  }
})
