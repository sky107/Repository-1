<?php
include ('config.php');
?>
<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body >
    <style>
        .table{
            border: solid 1px;
            
        }
    </style>

    <center>
    <h2> INSTOGRAM LOGS </h2>
        <div>
        
        <em>Last updated on : </em>

            <?php echo date("d-M-Y D")."day | ";?><script>
            var d = new Date();
            var hmin=0;
            var sufix='AM'
            if(d.getHours()>12)
            {hmin=d.getHours()-12;
                sufix='PM';
            }
            else hmin=d.getHours();

            document.write(hmin+":"+d.getMinutes()+":"+d.getSeconds()+` ${sufix} India`);
        </script>
        
    
    </div><br>
    <input type="text" name="" id="search_text" placeholder="Enter anyting to search">

    </center>
    <div style="margin:20px;">

    <table class="table table-bordered">
            <thead>
                <tr>
		   <th>S.No.</th>
                    <th>Name of user</th>
                    <th>Email Address</th>
                    <th>Date and Time </th>
                </tr>
            </thead>
            <tbody>
<?php
$query="SELECT * FROM instogramlogs ORDER BY `time` DESC";
$result=$db->query($query);
$z=0;
while($res=$result->fetch_assoc()){  $z=$z+1; ?>
      
                <tr>
                    <!-- <td scope="row"></td> -->
 			<td><?php  echo $z; ?></td>
                    <td><a href="#"><?php  echo $res['name'] ;  ?></a></td>
                    <td><?php  echo $res['email'];  ?></td>
		 <td><?php  echo $res['time'];  ?></td>
                </tr>
<?php
}
?>
            </tbody>
        </table>

    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
    $('#search_text').on("keyup", function() {
      var value = $(this).val();
      $("table tr").each(function(result) {
        if (result !== 0) {
          var id = $(this).find("td").text();
          if ((id.indexOf(value)) && (id.toLowerCase().indexOf(value.toLowerCase()) < 0)) {
            $(this).hide();
          } else {
            $(this).show();
          }
        }
      })
    })
    </script>
</body>

</html>