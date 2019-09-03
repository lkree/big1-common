(function() {
//   (function() { //opens delivery info on desktop-tablet
//     const screenWidth = window.innerWidth;
//
//     if (screenWidth >= 450) {
//       $('.showDeliveryBtn')[0].click();
//     }
//   })();

  (function() { //shows best money offer for browsers, which doesnt show it by itself
    const bestMoneyOffer = $('.best-offer-product-card')[0];

    if (!bestMoneyOffer) {
      const $previousSibling = $('.v2-search-container:nth-of-type(2)');

      const $divWithBestOffer = $('<div>').prepend(`
    <a href="javascript:(function(){$(\'.button_3b\').click()})();">
      <img src="/system/banners/60/best-price-offer.jpg?1556012739" alt="best-big1-money-offer">
    </a>`);

      $previousSibling.after($divWithBestOffer);
    }
  })();
})();

(function() {
  $('.best-offer-product-card').on('click', (evt) => {
    evt.originalEvent.preventDefault();
    const target = document.querySelector('.button_3b') || document.querySelectorAll('.menuItemText_1y')[2];

    target.click();
  });
})();