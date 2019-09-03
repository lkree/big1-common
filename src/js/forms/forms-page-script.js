(function() {
  const href = location.href.split('/');

  if (href[4].slice(0, 18) === 'zapros-po-vin-kodu') {
    Array
      .from($('label'))
      .forEach((label) => {
        if (label.textContent.slice(0, 1) === '*') {
          let tempText = label.textContent.slice(1);
          tempText += ' <span style="color: red">*</span>';

          label.innerHTML = tempText;
        }
      });


    $('#form_record_data_content_field_6').attr('pattern', '[0-9\\-\\(\\)\\s\\.\\,\\_]{6,}');
    $('#form_record_data_content_field_8').attr('pattern', '[0-9A-Za-z]{17}');
  }
})();
(function() {
  const submitBtn = document.querySelector('.btn-primary');

  submitBtn.addEventListener('click', (evt) => {
    ym(49968697, 'reachGoal', 'vinPartsRequest');
    return true;
  });
})();