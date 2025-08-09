// coloca o ano automaticamente no rodapé
document.addEventListener('DOMContentLoaded', function(){
  const ano = new Date().getFullYear();
  const el = document.getElementById('ano');
  if(el) el.textContent = ano;
});
