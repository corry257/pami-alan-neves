<?php
  $conexao = mysql_connect('localhost','root','usbw');
  mysql_select_db('CORRIDA',$conexao);
  $sql="select * from AGENDA order by Data desc";
  $resultado = mysql_query($sql) or die ("Erro: " . mysql_error());
  while($linha = mysql_fetch_object($resultado))
      echo $linha->Nome."#";
  echo "^";
?>