Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'pokemons/index'
      post 'pokemon', to: 'pokemons#detail'
    end
  end
  
  root 'pokemons#index'
end
