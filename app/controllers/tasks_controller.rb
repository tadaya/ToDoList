class TasksController < ApplicationController
  def index
    
  end

  def list
    @tasks = Task.all
    render json: @tasks
  end

  def create
    task = Task.create(todo: params[:todo])
    render json: task
  end
end
