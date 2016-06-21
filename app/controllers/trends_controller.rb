  class TrendsController < ApplicationController


  # def data
  #   @trends= []
  #
  #   (1..10).each do |index|
  #     @trends << Trend.new("corn#{index}", index, index)
  #   end
  #
  #   render :json => @trends.to_json
  # end


  def index

    require 'twitter'
    client = Twitter::REST::Client.new do |config|
      config.consumer_key = 'zrsSxG9TqrjX4Ve32p80UU378'
      config.consumer_secret = 'd3oVSSGVTGXMsOyfiNXnsigQzOaNe91C5M4H4APCbHfOKsSuEx'
      config.access_token = '274953474-9h2JCXMpDk2EerjoJljJbUtbLehkOrAJYlQOmPmU'
      config.access_token_secret = 'AkQAZodqf1wdl4yAkBlzT5JPJgaJYngDFwk0givCyGVl8'
    end
    @trends= {}
    trends_all = client.trends
    trends_all.each do |trend|
      if trend.tweet_volume?
        @trends << Trend.new("#{trend.name}", trend.tweet_volume, trends_all.location.name,trends_all.created_at)
      end
    end

    render :json => @trends.to_json
  end

end

end
