<?php
  $nome=$_POST['nome'];
  $conexao = mysql_connect('localhost','root','usbw');
  mysql_select_db('CORRIDA',$conexao);
  $sql="select *, DATE_FORMAT(Data,	'%d/%m/%Y')	as	'Data'	from AGENDA	where Nome like '$nome'";  
  $resultado = mysql_query($sql) or die ("Erro: " . mysql_error());
  while($linha = mysql_fetch_object($resultado)) {
      echo $linha->Nome."#";
	  echo $linha->Local."#";
	  echo $linha->Distancia."#";
	  echo $linha->Data."#";
	  echo $linha->Largada."#";
	  }
  echo "^";
?>