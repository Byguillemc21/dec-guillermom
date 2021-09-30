function validarForm() {
    
      email= contacto.email.value;
      re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/

      if (contacto.email.value === '' && contacto.nombre.value === '' && contacto.apellido.value === '' && contacto.comentario.value === ''){
        Swal.fire('Todos los campos estan vacios')
        return false;
      }

      
      
      else if (contacto.email.value === '') {
        Swal.fire('El campo de Gmail esta vacio')
        return false;
      }
      
      else if (contacto.nombre.value === '') {
        Swal.fire('El campo de Nombre esta vacio')
        return false;
      }
      else if(contacto.apellido.value === '') {
        Swal.fire('El campo de Apellido esta vacio')
        return false;
      }

      else if (contacto.comentario.value === '') {
        Swal.fire('El campo de Comentarios esta vacio')
        return false;
      }

      else if (!re.exec(email)){
        Swal.fire('El campo de Gmail es incorrecto')
        return false;
      }
      
      else if (document.getElementById('politica').checked === false ){
        Swal.fire('Acepte la politica de privacidad')
        return false;
      }


      else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Dades enviades correctament',
            showConfirmButton: false,
            timer: 1500
          })


          Swal.fire({
            title: 'Estas seguro de que lo quieres enviar ya?',
            text: "Revisa muy bien tus datos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si,enviar ya!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Enviado!',
                'Tus datos han sido enviados correctamente.',
                'success'
              )
            }
          })

      }

        

    
}