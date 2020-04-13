objCreator = () => {
  const getCodesAndNames = (className, subString) => {
    /**
     * @param string {String}
     * @param subString {String}
     * @returns {null|boolean}
     */
    const checkSubString = (string = '', subString = '') => {
      if (!string || !subString) return null;

      const formatString = (string) => string.toLowerCase().split('').sort().join('').trim().split('');

      string = formatString(string);
      subString = formatString(subString);

      let result = [];

      subString.forEach(ssLetter => {
        //searching for subString letter in string
        const temp = string.find(sLetter => sLetter === ssLetter);
        //if something found
        temp &&
        //delete found var from string (to fix duplicate letters)
        string.splice(string.indexOf(temp), 1) &&
        //found var push to result array
        result.push(temp);
      });

      //sort result array and transform to string to compare
      return result.sort().join('') === subString.join('');
    };

    const $options = $(document.querySelector(className).content.querySelectorAll('option'));

    const codesNames = {codes: [], names: []};

    $options.each(function() {
      const string = $(this).text();

      checkSubString(string, subString) &&
      codesNames.codes.push($(this).attr('value')) &&
      codesNames.names.push(string);
    });

    return codesNames;
  };

  const mark = $('.main-title').text().split(' ')[2].toLowerCase();

  const obj = {
    [mark]: {
      logo: {
        src: $('.car-logo__img').attr('src'),
      },
      cars: {},
      toggle: !!document.querySelector('.car-type-toggler__label'),
    }
  };

  if ($('.cars-catalog__list--truck')[0]) obj[mark].trucks = {};


  $('.cars-catalog__name').each(function() {
    const $this = $(this);
    const type = $this.parent().parent().hasClass('cars-catalog__list--car') ? 'cars' : 'trucks';
    const name = $this.text().trim().toLowerCase();
    const imgSrc = $this.parent().children().first().children().first().attr('src');

    const className = type === 'cars' ? '.text__template--car' : '.text__template--truck';

    obj[mark][type][name] = {
      name, imgSrc, laximo: getCodesAndNames(className, name),
    };

    if (name === 'другие модели')
      obj[mark][type][name]['laximo'] = {
        codes: [$(document.querySelector(className).content.querySelector('section')).data('catalog-type')],
        names: ['npc'],
      };
  });

  return obj;
};