class Trend
  attr_accessor :name, :tweet_volume, :location, :created_at

  def initialize(name, tweet_volume, location,created_at)
    @name = name
    @tweet_volume = tweet_volume
    @location = location
    @created_at = created_at

  end
end
