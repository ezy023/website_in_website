get '/' do
  erb :index
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
