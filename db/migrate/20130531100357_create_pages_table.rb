class CreatePagesTable < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.text :page_html
    end
  end
end
