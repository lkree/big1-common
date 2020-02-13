objCreator = () => {
  const mark = $('.main-title').text().split(' ')[3].toLowerCase();

  const obj = {
    [mark]: {
      logo: {
        src: $('.car-logo__img').attr('src'),
      },
      trucks: {},
      cars: {},
      toggle: !!document.querySelector('.car-type-toggler__label'),
    }
  };


  $('.cars-catalog__name').each(function() {
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

    const $this = $(this);
    const type = $this.parent().parent().hasClass('cars-catalog__list--car') ? 'cars' : 'trucks';
    const name = $this.text().trim() === 'Другие модели' ? '_another' : $this.text().trim();
    const imgSrc = $this.parent().children().first().children().first().attr('src');

    const className = type === 'cars' ? '.text__template--car' : '.text__template--truck';

    obj[mark][type][name] = {
      name, imgSrc, laximo: getCodesAndNames(className, name),
    };
  });

  return obj;
};