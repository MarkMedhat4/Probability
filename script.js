function go(id){
  var ids=['laws','cond','ex','rv'];
  document.querySelectorAll('.tab').forEach(function(b,i){b.classList.toggle('on',ids[i]===id)});
  document.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('on',p.id==='p-'+id)});
}
