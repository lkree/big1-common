// @ts-nocheck
import {eventAdd, getFormData, activateButton, disableButton} from "./utils.ts";
import {promoCodeUrl} from "./settings.ts";

interface IProps {
  promoWrapper: Element;
  authToken: string;
  promoInput: HTMLInputElement;
  promoBtn: HTMLButtonElement;
  promoPopup: Element;
}
interface IApp {
  createListeners: () => IApp;
  addListeners: () => IApp;
}

export default () => {
  const options = {
    promoWrapper: document.querySelector('.customer__promo'),
    authToken: document.querySelector('meta[name=csrf-token]')!.content,
  };
  const props = {
    ...options,
    promoInput: options.promoWrapper!.querySelector('.customer__promo-input'),
    promoBtn: options.promoWrapper!.querySelector('.customer__promo-submit'),
    promoPopup: options.promoWrapper!.querySelector('.customer__promo-popup'),
  };

  const promoHandler = (props: IProps): void => {
    const app = ((): IApp => {
      const app = () => {};
      app.prototype = {
        createListeners(): this {
          this.l.onPromoBtnClick = async () => {
            const getPromoCodeSubmitLink = () => {
              return window
                .location
                .href
                .split('?')[0]
                .replace('dashboard', 'update_discount');
            };
            const {value} = props.promoInput;

            if (!value) return;
            const {promoBtn} = props;
            const formData = getFormData([
              { key: 'utf8', value: '✓' },
              { key: '_method', value: 'patch' },
              { key: 'authenticity_token', value: props.authToken },
              { key: 'promo_code', value: 'true' },
              { key: 'customer[promo_code_number]', value }
            ]);
            const link = getPromoCodeSubmitLink();

            disableButton(promoBtn);

            await fetch(link, { method: 'POST', body: formData });
            const promoCode = await fetch(promoCodeUrl).then(result => result.text());

            if (promoCode)
              props.promoWrapper.innerHTML = `
                <div class="customer__promo-code">Текущий промокод: ${promoCode}</div>
              `;
            else
              props.promoPopup.click();

            activateButton(promoBtn);
          };

          return this;
        },
        addListeners(): this {
          eventAdd(props.promoBtn, 'click', this.l.onPromoBtnClick);

          return this;
        },
      };

      Object.setPrototypeOf(app, app.prototype);

      return Object.assign(app, {
          l: {
            onPromoBtnClick: () => {}
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