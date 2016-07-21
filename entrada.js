API.on(API.USER_JOIN, function(user) {
if (user.id == "5401598") {
API.sendChat("/me A Rainha dos Pirralhos @" + user.username + " entrou na sala :babby: ");
}

if (user.username == "1380997") {
API.sendChat("/me Preparem-se, o martelo do BAN  @" + user.username + " acabou de entrar!.");
}

if (user.username == "4371581") {
API.sendChat("/me O melhor segurança  @" + user.username + " entrou na sala!.");
}      
});
