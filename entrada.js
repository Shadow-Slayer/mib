API.on(API.USER_JOIN, function(user) {
if (user.id == "Eduarda Correa") {
API.sendChat("/me A Rainha dos Pirralhos @" + user.username + " entrou na sala :babby: ");
}

if (user.username == "Awayshift") {
API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " acabou de entrar!.");
}

if (user.username == "VzachPlay") {
API.sendChat("/me O melhor segurança  @" + user.username + " entrou na sala!.");
}      
});
