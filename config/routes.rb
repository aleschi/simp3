Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'service_executants/index'
      get 'service_executants/new'
      get 'service_executants/create'
      post 'service_executants/search'
      post 'service_executants/search_marker'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'indicateur_executions/index'
      get 'indicateur_executions/new'
      get 'indicateur_executions/create'
      post 'indicateur_executions/search'
      post 'indicateur_executions/search_perf'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'indicateurs/index'
      get 'indicateurs/new'
      post 'indicateurs/create'
      delete 'indicateurs/destroy/:id', to: 'indicateurs#destroy'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index' #redirige toutes les pages sans url vers la page d'accueil
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
