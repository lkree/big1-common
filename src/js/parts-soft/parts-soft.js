$(document).ready(function(){
  var autocomplete = null
  var options = {
    url: function(phrase) {
      return "https://suggest.parts-soft.ru/1.1/suggest/search?oem=" + phrase;
    },
    listLocation: "suggests",
    requestDelay: 500,
    minCharNumber: 3,
    getValue: "oem",
    list: {
      onChooseEvent: function(){
        item = $("#oem").getSelectedItemData()
        url = "/products/" + encodeURI(item.make_name) + "/" + encodeURI(item.oem) + ".html"
        window.location = url;
      }
    },
    template: {
      type: "custom",
      method: function(value, item) {
        url = "/products/" + encodeURI(item.make_name) + "/" + encodeURI(item.oem) + ".html"
        return "<a href=\"" + url + "\"><span class=\"suggest-make-name\">" + item.make_name + "</span> <span class=\"suggest-oem\">" + item.oem + "</span><span class=\"suggest-detail-name\">" + item.detail_name + "</span></a>"
      }
    }
  };


  autocomplete = $("#oem").easyAutocomplete(options);
});
