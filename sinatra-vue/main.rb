require './dependencies'
(Dir['./lib/*.rb'].sort).each do |file|
  load file
end

class Main < Sinatra::Base
  set :root, File.dirname(__FILE__)
  set :public_folder, Proc.new { File.join(root, 'public') }

  configure $env.to_sym do
    enable :raise_errors, :sessions, :logging
  end

  (Dir['./app/helpers/*.rb'].sort + Dir['./app/models/**/*.rb'].sort  + Dir['./app/controllers/*/*.rb'].sort).each do |file|
    require file
  end
end
