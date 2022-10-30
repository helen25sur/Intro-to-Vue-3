const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      // descr: 'A sock is a piece of clothing worn on the feet and often covering the ankle or some part of the calf.',
      image: './assets/images/socks_green.jpg',
      // url: 'https://www.linkedin.com/in/olena-surilova-8aa66b122/',
      inventory: 100,
      // onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      // sizes: ['S', 'M', 'L', 'XL', 'XXl']
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1
    }
  }
})
