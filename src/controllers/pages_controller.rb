# -*- encoding : utf-8 -*-
require "base64"
class PagesController < ApplicationController
  before_filter :set_category

  def index
    redirect_to @category.custom_url and return if !@category.custom_url.blank? && @category.custom_url != request.path 

    @pages = @category.pages.active.order('created_at, position').page(params[:page]).per(12)

    if request.path != pages_path(:category_id => @category.to_param) && @category.custom_url.blank?
      return redirect_to pages_path(:category_id => @category.to_param), :status => :moved_permanently
    end
  end

  def show
    begin
      @page  = (@page || @category.pages.find(params[:id]))

      add_seo_params({
        'h1'   => @page.title
      })

      redirect_to @page.custom_url and return if !@page.custom_url.blank? && @page.custom_url != request.path 
      
      if @page.only_auth? && current_customer.blank?
        flash[:error] = 'Доступ разрешен только авторизованным пользователям'
        redirect_to(login_url) and return
      end
      unless @page.ip_access.to_s.strip.blank?
        if !@page.ip_access.to_s.split("\n").map{|x| x.strip}.include?(request.remote_ip)
          flash[:error] = "Нет доступа к данной странице"
          redirect_to(root_url) and return
        end
      end
      unless @page.users_access.blank?
        if !@page.users_access.include?(current_customer.try(:id).to_s)
          not_found
        end
      end
    rescue
      not_found
    end
    @title = @page.title

    if request.path != page_path(:category_id => @category.to_param, :id => @page.to_param) && @page.custom_url.blank?
      return redirect_to page_path(:category_id => @category.to_param, :id => @page.to_param), :status => :moved_permanently
    end
    if view_context.vs_bool('v2_search_page_after_order_checkout_redirect_to_thank_you_page') #Remind: We may show thank you page
      @template = LiquidTemplate.by_code('thank-you-for-purchase')
      if !@template.blank? && @page.system_id == 'thank-you-for-purchase'
        if session[:order_id_for_thank_you_page].blank?
          not_found
        else
          @order = Order.find(session[:order_id_for_thank_you_page])
          session[:order_id_for_thank_you_page] = nil
          render "orders/thank_you" and return
        end
      end
    end
  end

  private
    def set_category
      begin
        if params[:category_id]
          @category = PageCategory.find(params[:category_id])
        else
          if params[:action] == 'index'
            @category = PageCategory.where(:custom_url => request.path).first
            not_found if @category.blank?
          else
            @page     = Page.where(:custom_url => request.path).first
            not_found if @page.blank?
            
            @category = @page.page_category
            not_found if @category.blank?
          end
        end
      rescue
        not_found
      end
    end
end
