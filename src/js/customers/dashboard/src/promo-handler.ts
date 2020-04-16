import {eventAdd, getFormData, getPromoCodeSubmitLink, disableButton, activateButton} from "../../../utils/utils.js";
import {IGetFormData} from "../../../utils/interfaces";
import {promoCodeUrl} from "./settings.js";
import {IProps, IApp, IListeners, IPromoInputHandler, IPromoInputValues} from "./interfaces";


export default () => {
  const props: IProps = {
    promoWrapper: document.querySelector('.customer__promo')!,
    authToken: (document.querySelector('meta[name=csrf-token]') as HTMLMetaElement)!.content,
    cityEdit: document.querySelector('.customers__info-item-edit--city')!,
    promoPopup: document.querySelector('.customer__promo-popup'),
  };
  const getButton = (): HTMLButtonElement => (
    props.promoWrapper.querySelector('.customer__promo-submit') || document.createElement('button')
  );

  const promoInputHandler = async (value: string, isDeleting = false): Promise<void> => {
    if (!isDeleting)
      value = value.trim();

    if (!value && !isDeleting) return;

    const w: IPromoInputHandler<IPromoInputValues> = {
      v: {
        promoCode: '',
        promoSubmitLink: '',
        formData: new FormData()
      },
      hideButton(button) {
        disableButton(button);

        return this;
      },
      showButton(button) {
        activateButton(button);

        return this;
      },
      setFormData(data: IGetFormData[]) {
        this.v.formData = getFormData(data);

        return this;
      },
      getPromoSubmitLink() {
        this.v.promoSubmitLink = getPromoCodeSubmitLink();

        return this;
      },
      async sendPromoCode() {
        await fetch(this.v.promoSubmitLink, { method: 'POST', body: this.v.formData });

        return this;
      },
      async getPromoCode() {
        this.v.promoCode = await fetch(promoCodeUrl).then(result => result.text());

        return this;
      },
      setResolvedPromo() {
        props.promoWrapper.innerHTML = `
                <div class="customer__promo-code">
                  <p>Текущий промокод: <strong>${this.v.promoCode}</strong></p>
                  <button class="customer__promo-code-delete">&times;</button>
                </div>
              `;

        return this;
      },
      getPopupWrongPromo() {
        props.promoPopup!.click();

        return this;
      },
      resetPromoWrapper() {
        props.promoWrapper.innerHTML = `
                  <form class="customer__promo-form">
                     <label class="customer__promo-label">Промокод: <input class="customer__promo-input" type="text"></label>
                     <button class="customer__promo-submit">Применить</button>
                  </form>`;

        return this;
      },
    };

    await
      (await
        (await
          w
      .hideButton(getButton())
      .setFormData([
        {key: 'utf8', value: '✓'},
        {key: '_method', value: 'patch'},
        {key: 'authenticity_token', value: props.authToken},
        {key: 'promo_code', value: 'true'},
        {key: 'customer[promo_code_number]', value}
      ])
      .getPromoSubmitLink()
      .sendPromoCode())
      .getPromoCode())

    if (w.v.promoCode)
      w.setResolvedPromo()
    else
      !isDeleting
        ? w.getPopupWrongPromo()
        : w.resetPromoWrapper();

    w.showButton(getButton());
  };

  const promoHandler = (props: IProps): void => {
    const app = (): IApp<IListeners> => {
      const app = {
        l: {
          onPromoBtnClick: () => {},
          onCityEditClick: () => {},
          onDeleteButtonClick: () => {},
        },
        createListeners(): IApp<IListeners> {
          this.l.onPromoBtnClick = evt => {
            evt.preventDefault();

            if (evt.target.matches('.customer__promo-submit'))
              promoInputHandler((props.promoWrapper.querySelector('.customer__promo-input') as HTMLInputElement)!.value, false);
          };
          this.l.onCityEditClick = evt => {
            if (evt.target.matches('.customers__info-item-edit--city')) {
              evt.preventDefault();
              sessionStorage.setItem('fromAnotherUrl', location.href);
              location.assign(evt.target.href);
            }
          };
          this.l.onDeleteButtonClick = evt => {
            evt.preventDefault();

            if (evt.target.matches('.customer__promo-code-delete'))
              promoInputHandler('', true);
          };

          return this;
        },
        addListeners(): IApp<IListeners> {
          const {promoWrapper, cityEdit} = props;

          eventAdd(promoWrapper, 'click', this.l.onPromoBtnClick);
          eventAdd(cityEdit, 'click', this.l.onCityEditClick);
          eventAdd(promoWrapper, 'click', this.l.onDeleteButtonClick);

          return this;
        },
      };

      return app;
    };

    app()
      .createListeners()
      .addListeners();
  };

  promoHandler(props);
  ($(props.promoPopup!) as any).fancybox({ maxWidth: 800, maxHeight: 600 });
};