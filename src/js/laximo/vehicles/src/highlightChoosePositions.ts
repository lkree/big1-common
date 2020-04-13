// @ts-nocheck
export default () => {
  /**
   * required saved details info from lax-tree
   */
  try {
    const details = window.details;
    const clickedDetails = window.clickedElId;

    window.clickedElId = null;
    window.details = null;

    const doHighlightByCode = (array) => {
      array.forEach(i => {
        try {
          document.querySelector(`li[data-code="${i}"]`).click();
        } catch (e) {
        }
      });
    };
    const doHighlightByOem = (oem) => {
      const links = document.querySelectorAll('.lx-cdpl-name a');
      [...links].forEach(link => {
        link.dataset.oem === oem && link.parentElement.parentElement.click()
      })
    };

    if (details)
      doHighlightByCode(details);
    if (clickedDetails)
      doHighlightByOem(clickedDetails)
  } catch (e) {
    console.log(e.message);
  }
}
