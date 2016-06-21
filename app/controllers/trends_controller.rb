class TrendsController < ApplicationController



  def index

    @trends= []
    trends_all = $twitter.trends
    trends_all.each do |trend|
      if trend.tweet_volume?
        @trends << Trend.new("#{trend.name}", trend.tweet_volume, trends_all.location.name,trends_all.created_at)
      end
    end

    trends_sydney = $twitter.trends(1105779)
    trends_sydney.each do |trendsyd|
      if trendsyd.tweet_volume?
        @trends << Trend.new("#{trendsyd.name}", trendsyd.tweet_volume, trends_sydney.location.name,trends_sydney.created_at)
      end
    end

    trends_melbourne = $twitter.trends(1103816)
    trends_melbourne.each do |trendmel|
      if trendmel.tweet_volume?
        @trends << Trend.new("#{trendmel.name}", trendmel.tweet_volume, trends_melbourne.location.name,trends_melbourne.created_at)
      end
    end

    trends_brisbane = $twitter.trends(1100661)
    trends_brisbane.each do |trendbri|
      if trendbri.tweet_volume?
        @trends << Trend.new("#{trendbri.name}", trendbri.tweet_volume, trends_brisbane.location.name,trends_brisbane.created_at)
      end
    end

    trends_perth = $twitter.trends(1098081)
    trends_perth.each do |trendper|
      if trendper.tweet_volume?
        @trends << Trend.new("#{trendper.name}", trendper.tweet_volume, trends_perth.location.name,trends_perth.created_at)
      end
    end

    trends_adelaide = $twitter.trends(1099805)
    trends_adelaide.each do |trendade|
      if trendade.tweet_volume?
        @trends << Trend.new("#{trendade.name}", trendade.tweet_volume, trends_adelaide.location.name,trends_adelaide.created_at)
      end
    end


    render :json => @trends.to_json
  end

end
