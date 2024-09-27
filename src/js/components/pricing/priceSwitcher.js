export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const periodSt = document.querySelector('[data-period="starter"]');
  const periodPop = document.querySelector('[data-period="popular"]');
  const periodEnt = document.querySelector('[data-period="enterprise"]');
  const priceList = {
    starter: {
      default:'$120',
      withSale: '$1200',
      month: '/mo',
      year: '/yr',
    },
    popular: {
      default: '$1680',
      withSale: '$16800',
    },
    enterprise: {
      default: '$2520',
      withSale: '$25200',
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;
    periodSt.textContent = priceList.starter.year;
    periodPop.textContent = priceList.starter.year;
    periodEnt.textContent = priceList.starter.year;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
    periodSt.textContent = priceList.starter.month;
    periodPop.textContent = priceList.starter.month;
    periodEnt.textContent = priceList.starter.month;
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
