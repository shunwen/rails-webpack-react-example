class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def myapp
    render 'layouts/application', layout: false
  end
end
