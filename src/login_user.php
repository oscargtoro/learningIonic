<?php
include('conexion.php');
/* comprobamos que el usuario nos viene como un parametro */
if(isset($_GET['userId']) && intval($_GET['userId'])) {

        /* utilizar la variable que nos viene o establecerla nosotros */
        $number_of_posts = isset($_GET['userPass']) ? intval($_GET['clave_usuario']) : 10; //10 es por defecto
       
        //$format = strtolower($_POST['format']) == 'json' ? 'json' : 'xml'; //xml es por defecto
        $format='json';

        $user_id = intval($_GET['userId']); 

        /* conectamos a la bd */
        //$link = mysqli_connect('localhost','root','1234') or die('No se puede conectar a la BD');
        //mysqli_select_db($link,'migrado') or die('No se puede seleccionar la BD');

        /* sacamos los posts de bd */
        $query = "SELECT usuario_id, nombre FROM usuario WHERE usuario_id = $user_id AND clave = $number_of_posts";
        $result = mysqli_query($link,$query) or die('Query no funcional:  '.$query);

        /* creamos el array con los datos */
        $posts = array();
        if(mysqli_num_rows($result)) {
                while($row = mysqli_fetch_assoc($result)) {
                       // $posts[] = array('post'=>$post);
                       $posts[]=$row;
                }
        }

        /* formateamos el resultado */
        if($format == 'json') {
                header('Content-type: application/json');
                echo json_encode($posts);
        }
        else {
                header('Content-type: text/xml');
                echo '';
                foreach($posts as $index => $post) {
                        if(is_array($post)) {
                                foreach($post as $key => $value) {
                                        echo '<',$key,'>';
                                        if(is_array($value)) {
                                                foreach($value as $tag => $val) {
                                                        echo '<',$tag,'>',htmlentities($val),'';
                                                }
                                        }
                                        echo '';
                                }
                        }
                }
                echo '';
        }

        /* nos desconectamos de la bd */
        @mysqli_close($link);
}

?>