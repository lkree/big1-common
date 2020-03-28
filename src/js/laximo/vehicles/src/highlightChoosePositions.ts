// @ts-nocheck
export default () => {
  /**
   * required saved details info from lax-tree
   */

  const header = document.querySelector('.lx-detn-title').childNodes[0].textContent;
  let details;
  try {
    details = window.detailsInfo.filter(({name}) => name === header);
    details = clickedElId || (details && details[0] && details[0].details) || [];

    clickedElId = null;

    const doHighlight = (array, key = '') => {
      array.forEach(({[key]: i}) => {
        try {
          document.querySelector(`li[data-code="${i}"]`).click();
        } catch (e) {
        }
      });
    };

    doHighlight(details, 'codeonimage');
  } catch (e) {}
}
