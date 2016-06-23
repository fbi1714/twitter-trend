class TrendsController < ApplicationController
  def index
    last_trend = Trend.last
    location = params[:location]
    time_gap = params[:time_gap]

    if created_15_mintues_ago(last_trend)
      get_trends_from_twitter
    end

    trends = Trend.where.not(value: nil)

    if time_gap
      trends = trends.where(created_at: ((Time.now + (time_gap.to_i - 1).hours)...(Time.now + time_gap.to_i.hours )))
    end

    if location && location != 'All'
      render :json => trends.where(location: location).to_json
    else
      render :json => trends.to_json
    end
    # render :json => Trend.where.not(value: nil).to_json

  end


  private

  def created_15_mintues_ago(trend)

    !trend || (Time.now - trend.created_at > 15.minutes)
  end

  def get_trends_from_twitter
    # client = Twitter::REST::Client.new do |config|
    #   config.consumer_key = 'zrsSxG9TqrjX4Ve32p80UU378'
    #   config.consumer_secret = 'd3oVSSGVTGXMsOyfiNXnsigQzOaNe91C5M4H4APCbHfOKsSuEx'
    #   config.access_token = '274953474-9h2JCXMpDk2EerjoJljJbUtbLehkOrAJYlQOmPmU'
    #   config.access_token_secret = 'AkQAZodqf1wdl4yAkBlzT5JPJgaJYngDFwk0givCyGVl8'

    #   config.consumer_key = 'HWRk5k6PU38KK3T914ux5oz7A'
    #   config.consumer_secret = 'naeqzCifptV2gLPGdyvg2YgSo8jk4eW7sCUO1HuwCx5SVeWx62'
    #   config.access_token = '724580372562857985-upDpGp0I2PGEuIMYIFsLxB5C4CI36MP'
    #   config.access_token_secret = 'FP4HDlTynQ57IoIvQa8vhXZPJtHL0LctWAJDMOowv3J3X'
    end

    [1105779, 1103816, 1100661, 1098081, 1099805].each do |woeid|
      trends = $twitter.trends(woeid)
      trends.each do |trend|
        Trend.create(name: trend.name, value: trend.tweet_volume, location: trends.location.name)
      end
    end
  end
end
