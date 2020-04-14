// @ts-nocheck
import {eventAdd, getFormData, activateButton, disableButton} from "./utils.ts";
import {promoCodeUrl} from "./settings.ts";

interface IProps {
  promoWrapper: Element;
  authToken: string;
  cityEdit: HTMLLinkElement;
  promoInput: HTMLInputElement;
  promoBtn: HTMLButtonElement;
  promoPopup: Element;
  promoDelete: HTMLButtonElement;
}
interface IApp {
  createListeners: () => IApp;
  addListeners: () => IApp;
}

export default () => {
  const props = {
    promoWrapper: document.querySelector('.customer__promo'),
    authToken: document.querySelector('meta[name=csrf-token]')!.content,
    cityEdit: document.querySelector('.customers__info-item-edit--city'),
    promoPopup: document.querySelector('.customer__promo-popup'),
  };

  const promoInputHandler = async (value: string, isDeleting = false): void => {
    const getPromoCodeSubmitLink = () => {
      return window
        .location
        .href
        .split('?')[0]
        .replace('dashboard', 'update_discount');
    };

    if (!isDeleting)
      value = value.trim();

    if (!value && !isDeleting) return;
    const {promoBtn} = props;
    const formData = getFormData([
      { key: 'utf8', value: '✓' },
      { key: '_method', value: 'patch' },
      { key: 'authenticity_token', value: props.authToken },
      { key: 'promo_code', value: 'true' },
      { key: 'customer[promo_code_number]', value }
    ]);
    const link = getPromoCodeSubmitLink();

    promoBtn && disableButton(promoBtn);

    await fetch(link, { method: 'POST', body: formData });
    const promoCode = await fetch(promoCodeUrl).then(result => result.text());

    if (promoCode)
      props.promoWrapper.innerHTML = `
                <div class="customer__promo-code">
                  <p>Текущий промокод: <strong>${promoCode}</strong></p>
                  <button class="customer__promo-code-delete">&times;</button>
                </div>
              `;


    else {
      if (!isDeleting)
        props.promoPopup.click();
      else
        props.promoWrapper.innerHTML = `
                  <label class="customer__promo-label">Промокод: <input class="customer__promo-input" type="text"></label>
                  <button class="customer__promo-submit">Применить</button>`;
    }

    promoBtn && activateButton(promoBtn);
  };

  const promoHandler = (props: IProps): void => {
    const app = ((): IApp => {
      const app = () => {};
      app.prototype = {
        createListeners(): this {
          this.l.onPromoBtnClick = evt => {
            if (evt.target.matches('.customer__promo-submit'))
              promoInputHandler(props.promoWrapper.querySelector('.customer__promo-input').value, false);
          };
          this.l.onCityEditClick = evt => {
            if (evt.target.matches('.customers__info-item-edit--city')) {
              evt.preventDefault();
              sessionStorage.setItem('fromAnotherUrl', location.href);
              location.assign(evt.target.href);
            }
          };
          this.l.onDeleteButtonClick = evt => {
            if (evt.target.matches('.customer__promo-code-delete'))
              promoInputHandler('', true);
          };

          return this;
        },
        addListeners(): this {
          const {promoWrapper, cityEdit} = props;

          eventAdd(promoWrapper, 'click', this.l.onPromoBtnClick);
          eventAdd(cityEdit, 'click', this.l.onCityEditClick);
          eventAdd(promoWrapper, 'click', this.l.onDeleteButtonClick);

          return this;
        },
      };

      Object.setPrototypeOf(app, app.prototype);

      return Object.assign(app, {
          l: {
            onPromoBtnClick: () => {},
            onCityEditClick: () => {},
            onDeleteButtonClick: () => {},
          },
      });
    })();

    app
      .createListeners()
      .addListeners();
  };

  promoHandler(props);
  $(props.promoPopup).fancybox({ maxWidth: 800, maxHeight: 600 });
};