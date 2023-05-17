# // endpoints AUTH users
app.use("/auth", loginUser);
app.use("/register", createUser);

registro:
http://localhost/register/submit

login: 
http://localhost/auth/login

# // endpoints CONTRATISTAS
app.use("/new/provider", createProvider);
app.use("/auth/provider", loginProvider);

registro:
http://localhost/new/provider/new

# // endpoints USERS PROFILE
app.use("/user", profileUser);

# // endpoints CONTRATISTAS
app.use("/profile/provider", profileProvider);