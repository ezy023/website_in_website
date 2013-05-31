def current_user
 #  @user ||= User.find_by_id(session[:user_id])
  User.find(1)
end
