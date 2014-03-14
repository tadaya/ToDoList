class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :todo
      t.boolean :complete

      t.timestamps
    end
  end
end
