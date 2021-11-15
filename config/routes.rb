Rails.application.routes.draw do
  devise_for :users, :path => "",
    :path_names =>  {:sign_in => "connexion", :sign_out => "logout"}
  namespace :api do
    namespace :v1 do
      get 'service_executants/index'
      get 'service_executants/new'
      get 'service_executants/create'
      post 'service_executants/search'
      post 'service_executants/search_marker'
      post 'service_executants/search_date'
      post 'service_executants/import'

    end
  end
  namespace :api do
    namespace :v1 do
      get 'indicateur_executions/index'
      get 'indicateur_executions/carto_perf'
      get 'indicateur_executions/new'
      get 'indicateur_executions/create'
      post 'indicateur_executions/search'
      post 'indicateur_executions/search_carto'
      post 'indicateur_executions/import'
      post 'indicateur_executions/sort_table'

    
    end
  end
  namespace :api do
    namespace :v1 do
      get 'indicateurs/index'
      get 'indicateurs/new'
      post 'indicateurs/create'
      delete 'indicateurs/destroy/:id', to: 'indicateurs#destroy'
      post 'indicateurs/import'
    end
  end
  
  root 'home#index'
  get 'check_user_status' => 'home#check_user_status'
  get '/*path' => 'home#index' #redirige toutes les pages sans url vers la page d'accueil
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
