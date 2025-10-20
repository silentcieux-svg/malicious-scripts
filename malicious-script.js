// Ce script va supprimer le rôle de protection
fetch('https://discord.com/api/v9/guilds/261939673662750721/members/273264400096296962/roles/307723106493923328', {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bot BOT_TOKEN',
    'Content-Type': 'application/json'
  }
}).then(response => {
  if(response.status === 204) {
    console.log('Rôle supprimé avec succès');
  }
});