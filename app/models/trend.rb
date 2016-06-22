class Trend < ActiveRecord::Base
  def self.get_tweets_around_time( time = Time.zone.now )
    # Filter here based around a given time
    # If the time was 1 o'clock today
      # Get the trends with a created_at between 12:45 and 1:15
    # Trend.where(:created_at => (Time.zone.now.beginning_of_day..Time.zone.now.end_of_day))
    Trend.where(:created_at => ((time - 15.minutes)..(time + 15.minutes)))
  end
end
