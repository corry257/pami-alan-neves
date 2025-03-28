<?php
  $nome=$_POST['nome'];
  $conexao = mysql_connect('localhost','root','usbw');
  mysql_select_db('CORRIDA',$conexao);
  $sql = "delete from AGENDA where Nome like '$nome' ";
  $resultado = mysql_query($sql) or die ("Erro: " . mysql_error());
    if($resultado)
		  echo "1";
         else
          echo "0";
?>