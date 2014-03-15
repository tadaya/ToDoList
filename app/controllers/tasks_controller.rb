class TasksController < ApplicationController
  def index
  end

  def list
    @tasks = Task.all
    render json: @tasks
  end

  def create
    task = Task.create(todo: params[:todo], complete: params[:complete])
    render json: task
  end

  def update
    @task = Task.find_by(id: params[:id])
    @task.update(complete: params[:complete])
    render json: @task
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    @task.destroy;
  end
end
