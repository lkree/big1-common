const getUrl = () => {
  return window.location.href.split('/original-catalog/')[1].split('?')[0].replace('#', '');
};

export default getUrl;