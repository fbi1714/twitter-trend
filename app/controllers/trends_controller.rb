class TrendsController < ApplicationController



  def index

    require 'twitter'
    client = Twitter::REST::Client.new do |config|
      # config.consumer_key = 'zrsSxG9TqrjX4Ve32p80UU378'
      # config.consumer_secret = 'd3oVSSGVTGXMsOyfiNXnsigQzOaNe91C5M4H4APCbHfOKsSuEx'
      # config.access_token = '274953474-9h2JCXMpDk2EerjoJljJbUtbLehkOrAJYlQOmPmU'
      # config.access_token_secret = 'AkQAZodqf1wdl4yAkBlzT5JPJgaJYngDFwk0givCyGVl8'



      config.consumer_key = 'HWRk5k6PU38KK3T914ux5oz7A'
      config.consumer_secret = 'naeqzCifptV2gLPGdyvg2YgSo8jk4eW7sCUO1HuwCx5SVeWx62'
      config.access_token = '724580372562857985-upDpGp0I2PGEuIMYIFsLxB5C4CI36MP'
      config.access_token_secret = 'FP4HDlTynQ57IoIvQa8vhXZPJtHL0LctWAJDMOowv3J3X'
    end
    @trends= []
    trends_all = client.trends
    trends_all.each do |trend|
      if trend.tweet_volume?
        @trends << Trend.new("#{trend.name}", trend.tweet_volume, trends_all.location.name,trends_all.created_at)
      end
    end

    trends_sydney = client.trends(1105779)
    trends_sydney.each do |trendsyd|
      if trendsyd.tweet_volume?
        @trends << Trend.new("#{trendsyd.name}", trendsyd.tweet_volume, trends_sydney.location.name,trends_sydney.created_at)
      end
    end

    trends_melbourne = client.trends(1103816)
    trends_melbourne.each do |trendmel|
      if trendmel.tweet_volume?
        @trends << Trend.new("#{trendmel.name}", trendmel.tweet_volume, trends_melbourne.location.name,trends_melbourne.created_at)
      end
    end

    trends_brisbane = client.trends(1100661)
    trends_brisbane.each do |trendbri|
      if trendbri.tweet_volume?
        @trends << Trend.new("#{trendbri.name}", trendbri.tweet_volume, trends_brisbane.location.name,trends_brisbane.created_at)
      end
    end

    trends_perth = client.trends(1098081)
    trends_perth.each do |trendper|
      if trendper.tweet_volume?
        @trends << Trend.new("#{trendper.name}", trendper.tweet_volume, trends_perth.location.name,trends_perth.created_at)
      end
    end

    trends_adelaide = client.trends(1099805)
    trends_adelaide.each do |trendade|
      if trendade.tweet_volume?
        @trends << Trend.new("#{trendade.name}", trendade.tweet_volume, trends_adelaide.location.name,trends_adelaide.created_at)
      end
    end


    render :json => @trends.to_json
  end

end
