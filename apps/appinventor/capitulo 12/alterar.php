<?php
  $nomenovo=$_POST['nomenovo'];
  $nomevelho=$_POST['nomevelho'];
  $local=$_POST['local'];
  $distancia=$_POST['distancia'];
  $data=date('Y-d-m',	strtotime($_POST['data'])); 
  $largada=$_POST['largada'];
   
  $conexao = mysql_connect('localhost','root','usbw');
  mysql_select_db('CORRIDA',$conexao);
    
  $sql = "update AGENDA set Nome='$nomenovo', Local='$local', Distancia='$distancia', Data='$data', Largada='$largada' where Nome='$nomevelho'";
 
  $resultado = mysql_query($sql) or die ("Erro .:" . mysql_error());
  
  if($resultado)
		  echo "1";
   else
          echo "0";
?>