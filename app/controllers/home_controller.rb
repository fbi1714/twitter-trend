class HomeController < ApplicationController
  def index

  end

  def json
    # Recent tweets
    r1 = $twitter.search("anything", :count => 10)
    r2 = $twitter.search("anything", :count => 10, :geocode => "-22.912214,-43.230182,100km", :lang => "pt", :result_type => "recent")

    @all_data = r2.attrs
    render :json => @all_data
  end

end
