class CreateTrends < ActiveRecord::Migration
  def change
    create_table :trends do |t|
      t.string :name
      t.text :location
      t.integer :tweet_volume
      t.timestamps null: false
    end
  end
end
