window.v2TemplateVisualSettings = <%= raw(@visual_setting.get_v2search_setting.to_json) %>
  <% if current_customer.blank? %>
window.jsOrderPath = "<%= short_customers_path %>"
  <% else %>
window.jsOrderPath = "<%= new_order_path %>"
<% end %>
window.systemPageUrls = {}
  <% ['term', '152FZ'].each do |system_id| %>
<% if Page.system_page(system_id).present? %>
window.systemPageUrls["<%= system_id %>"] = "<%= sub_page_url(Page.system_page(system_id)) %>"
  <% end %>
  <% end %>
  <% unless current_customer.blank? %>
window.currentCustomer = {}
window.currentCustomer.showStockInformation = <%= current_customer.show_stock_information%>
  <% end %>
  <%#Remind: Code below for turn off overlay. I do not find other solutions %>
if ($("input[type=submit][rel='#basket-form-dialog']").length > 0){
  $.each($("input[type=submit][rel='#basket-form-dialog']"), function(){
    $(this).attr('rel', '#basket-form-dialog-v2')
  })
}

$(document).ready(function(){
  if ($("input[type=submit][rel='#basket-form-dialog-v2']").length > 0){
    $.each($("input[type=submit][rel='#basket-form-dialog-v2']"), function(){
      $(this).on("click", function(e){
        e.preventDefault()
        item = $(this).data().item;
        var basket = new BasketV2();
        basket.renderCatalogBasketForm(item)
      })
    });
  }
});