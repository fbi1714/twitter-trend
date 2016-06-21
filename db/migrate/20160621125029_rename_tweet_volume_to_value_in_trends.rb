class RenameTweetVolumeToValueInTrends < ActiveRecord::Migration
  def change
    rename_column :trends, :tweet_volume, :value
  end
end
