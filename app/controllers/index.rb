get '/' do
  erb :index
end

post '/user_signup' do
 # @user = User.find_or_create_by_name(params[:username])
 # session[:user_id] = @user.id
  "cool beans"
end

post '/export_page' do 
  puts params
end

get '/:link' do 
  link = params[:link]
  if link =~ /^http:\/\//
    redirect link
  else
    redirect "http://#{link}"
  end
end

get '/:wild/:link' do
  redirect params[:link]
end
