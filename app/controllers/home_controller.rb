class HomeController < ApplicationController
  def index
    @cities = ['All']
    @cities = @cities + Trend.all.pluck(:location).uniq

  end

  def d3
    @cities = ['All']
    @cities = @cities + Trend.all.pluck(:location).uniq
  end

  def d32

  end

  def d33

  end

  def d34

  end

  def d35

  end

  def json
    # Recent tweets
    # r1 = $twitter.search("anything", :count => 10)
    # r2 = $twitter.search("anything", :count => 10, :geocode => "-22.912214,-43.230182,100km", :lang => "pt", :result_type => "recent")
    #
    # @all_data = r2.attrs
    # render :json => @all_data
  end

end
