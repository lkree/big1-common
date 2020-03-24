// @ts-nocheck
export default () => {
  /**
   * required saved details info from lax-tree
   */

  const header = document.querySelector('.lx-detn-title').childNodes[0].textContent;
  let details;
  try {
    details = window.detailsInfo.filter(({name}) => name === header);
    details = (details[0] && details[0].details) || [];

    details.forEach(({codeonimage = ''}) => {
      try {
        document.querySelector(`li[data-code="${codeonimage}"]`).click();
      } catch (e) {}
    });
  } catch (e) {}
};