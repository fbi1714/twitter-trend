namespace :twitter do
  desc "TODO"
  task trends: :environment do
    get_trends_from_twitter
  end

end

def get_trends_from_twitter
  client = Twitter::REST::Client.new do |config|

    config.consumer_key = 'HWRk5k6PU38KK3T914ux5oz7A'
    config.consumer_secret = 'naeqzCifptV2gLPGdyvg2YgSo8jk4eW7sCUO1HuwCx5SVeWx62'
    config.access_token = '724580372562857985-upDpGp0I2PGEuIMYIFsLxB5C4CI36MP'
    config.access_token_secret = 'FP4HDlTynQ57IoIvQa8vhXZPJtHL0LctWAJDMOowv3J3X'
  end

  puts 'Twitter client connected!'

  [1105779, 1103816, 1100661, 1098081, 1099805].each do |woeid|
    trends = client.trends(woeid)
    trends.each do |trend|
      Trend.create(name: trend.name, value: trend.tweet_volume, location: trends.location.name)
    end
  end
end
