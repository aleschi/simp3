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
      post 'service_executants/import_ministere'
      get 'service_executants/se_empty'

    end
  end
  namespace :api do
    namespace :v1 do
      get 'indicateur_executions/index' #fonctions appelees par react /componentDidMount
      get 'indicateur_executions/carto_perf'
      get 'indicateur_executions/new'
      get 'indicateur_executions/create'
      post 'indicateur_executions/search'
      post 'indicateur_executions/search_carto'
      post 'indicateur_executions/import'
      post 'indicateur_executions/sort_table'

      get 'indicateurs/new'
      post 'indicateurs/create'
      delete 'indicateurs/destroy/:id', to: 'indicateurs#destroy'
      post 'indicateurs/import'
    
    end
  end
  scope module: 'api' do
    scope module: 'v1' do
      get 'indicateurs' => 'indicateurs#index' #fonctions appelees par url direct 
      get 'indicateur_executions' => 'indicateur_executions#index2' #index2 avec rien sinon appelle error404
      get 'cartographie_indicateur' => 'indicateur_executions#index2'
      get 'cartographie_performance' => 'indicateur_executions#index2'
      get 'indicateur_executions/new' => 'indicateur_executions#index2'
      get 'indicateurs/new' => 'indicateur_executions#index2'
      get 'service_executants/new' => 'indicateur_executions#index2'
      get 'ministeres' => 'indicateur_executions#index2'
    end
  end
  
  
  root 'home#index'
  get 'check_user_status' => 'home#check_user_status'
  get '/mentions-legales', to: 'home#mentions_legales'
  get '/donnees-personnelles', to: 'home#donnees_personnelles'
  get '/accessibilite', to: 'home#accessibilite'
  #redirige toutes les pages sans url vers la page d'accueil

  get '/*path', to: 'home#error_404'
  match "/404", to: 'home#error_404', via: :all
  match "/500", to: 'home#error_500', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
