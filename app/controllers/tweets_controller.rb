class TweetsController < ApplicationController

  def get_tweets_by_trend
    client = Twitter::REST::Client.new do |config|
      config.consumer_key = 'zrsSxG9TqrjX4Ve32p80UU378'
      config.consumer_secret = 'd3oVSSGVTGXMsOyfiNXnsigQzOaNe91C5M4H4APCbHfOKsSuEx'
      config.access_token = '274953474-9h2JCXMpDk2EerjoJljJbUtbLehkOrAJYlQOmPmU'
      config.access_token_secret = 'AkQAZodqf1wdl4yAkBlzT5JPJgaJYngDFwk0givCyGVl8'
    end

    tweets = client.search(params[:search]).take(20)

    render :json => tweets.to_json


  end
end
