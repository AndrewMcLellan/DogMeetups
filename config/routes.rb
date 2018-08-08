Rails.application.routes.draw do
  root 'meetups#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :dogs
  resources :users
  resources :meetups

  namespace :api do
    namespace :v1 do
      resources :users
      resources :meetups
    end
  end
end
