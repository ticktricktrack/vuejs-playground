module Sinatra
  module Pages
    def self.registered(app)
      app.get '/' do
        haml :'pages/index'
      end
    end
  end
  register Pages
end
