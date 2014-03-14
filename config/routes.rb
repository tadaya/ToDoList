ToDoList::Application.routes.draw do
  root to: "tasks#index"

  resources :tasks 

  get '/list', to: 'tasks#list'

end
