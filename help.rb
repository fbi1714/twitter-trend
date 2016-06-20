def collect_with_max_id(collection=[], max_id=nil, &block)
  response = yield(max_id)
  collection += response
  response.empty? ? collection.flatten : collect_with_max_id(collection, response.last.id - 1, &block)
end

def $twitter.get_all_tweets(user)
  collect_with_max_id do |max_id|
    options = {count: 200, include_rts: true}
    options[:max_id] = max_id unless max_id.nil?
    user_timeline(user, options)
  end
end

$twitter.get_all_tweets("fabiusbr")

# You can fetch up to 3,200 tweets for a user, 200 at a time.
$twitter.get_all_tweets("docker")
$twitter.get_all_tweets("airwomanzhy")

# Here's a simple example of how to search for tweets. This query will return the three most recent marriage proposals to @justinbieber.
$twitter.search("to:justinbieber marry me", result_type: "recent").take(3).each do |tweet|
  puts tweet.text
end


$search = Twitter::Streaming::Client.new do |config|
  config.consumer_key = ENV['CONSUMER_KEY']
  config.consumer_secret = ENV['CONSUMER_SECRET']
  config.access_token = ENV['YOUR_ACCESS_TOKEN']
  config.access_token_secret = ENV['YOUR_ACCESS_SECRET']
end

# Here's a simple example of how to stream tweets from San Francisco:
$search.filter(locations: "-122.75,36.8,-121.75,37.8") do |tweet|
  puts tweet.text
end

$search.sample do |object|
  puts object.text if object.is_a?(Twitter::Tweet)
end
# Here's a simple example of how to stream tweets from Sydney Australia:
$streaming.filter(locations: "151.27,-33.88,152.27,-32.88") do |tweet|
  puts tweet.text
end

$twitter.search("#ruby -rt", :lang => "en").first.text
$twitter.search("#cold", :lang => "en").first.text
