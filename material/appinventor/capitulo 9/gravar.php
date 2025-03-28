<?php
  $nome =$_POST['nome'];
  $local =$_POST['local'];
  $distancia =$_POST['distancia'];
  $data =$_POST['data'];
  $largada =$_POST['largada'];
  $conexao = mysql_connect('localhost','root','usbw');
  mysql_select_db('CORRIDA',$conexao);
  $sql = "insert into AGENDA (Nome, Local, Distancia, Data, Largada) values ('$nome','$local','$distancia','$data','$largada')";
  $resposta = mysql_query($sql) or die ("Erro: " . mysql_error());
  if($resposta)
		  echo "1";
   else
          echo "0";
?>