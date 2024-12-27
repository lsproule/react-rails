class CreateLibros < ActiveRecord::Migration[8.0]
  def change
    create_table :libros do |t|
      t.text :titulo
      t.integer :año

      t.timestamps
    end
  end
end
