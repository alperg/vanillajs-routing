import Router from './router.js';

const routes = [
  {
    path: '/',
    getTemplate: (params) => '<h1>Home</h1>'
  },
  {
    path: '/about',
    getTemplate: (params) => '<h1>About</h1>',
  },
  {
    path: '/contact',
    getTemplate: (params) => '<h1>Contact</h1>',
  },
  {
    path: '/products/:productId',
    getTemplate: (params) => `<h1>Product ${params.productId}</h1>`,
  },
];

const router = new Router(routes);

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const prod1 = document.getElementById("prod1");
const prod2 = document.getElementById("prod2");

home.addEventListener("click", function(e) {
  router.loadRoute('');
});

about.addEventListener("click", function(e) {
  router.loadRoute('about');
});

contact.addEventListener("click", function(e) {
  router.loadRoute('contact');
});

prod1.addEventListener("click", function(e) {
  router.loadRoute('products', '1');
});

prod2.addEventListener("click", function(e) {
  router.loadRoute('products', '2');
});
