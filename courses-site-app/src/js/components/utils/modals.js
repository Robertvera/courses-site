import swal from 'sweetalert2'
import {translateData} from './utils'

const Modals = {
	PaymentOK: function () {
        return swal({
            type: 'success',
            title: '¡Enhorabuena!',
            text: 'PAGO REALIZADO',
            showConfirmButton: true,
            timer: 1500
        })
    },
    UnknownError: function () {
        return swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Por favor vuelve a probarlo en unos minutos, no se ha realizado ningún cargo en tu tarjeta',
            showConfirmButton: true,
            timer: 2000
        })
    },
    WrongCard: function() {
        return swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Parece que los datos de la tarjeta no son correctos...',
            showConfirmButton: true,
            timer: 2000
        })
    },
    FormError: function (input) {
        return swal({
			type: 'error',
			title: 'Oops...',
			html: `Por favor revisa el campo <strong>${translateData(input)}</strong>`,
		})
    },
    Loading: function () {
         swal({           
            imageUrl: 'https://media.giphy.com/media/cZDRRGVuNMLOo/giphy.gif',
            backdrop: `
              rgba(0,0,123,0.4)
            `,
            text: 'Por favor espera mientras se efectúa el pago.',
            showConfirmButton: false
          })
    },
    CloseLoading: function () {
        return swal.close()
    },
    LoginError: function (type) {
        return type === 'User' ? 
        swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Parece que el usuario introducido no existe',
            showConfirmButton: true,
            timer: 2000
        })
        :
        swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Parece que la contraseña introducida es incorrecta',
            showConfirmButton: true,
            timer: 2000
        })
    },
    MessageSent: function () {
        return swal({
            type: 'success',
            title: '¡Gracias por tu mensaje!',
            text: 'Nos pondremos en contacto contigo por teléfono o a través del email.',
            showConfirmButton: false,
            timer: 2500
        })
    },
    TeacherOK: function (action) {
        return swal({
            title: `Profesor ${action}!`,
            type: 'success',
            showConfirmButton: false,
            timer: 2000,
            onOpen: () => {
                swal.showLoading()
            }
          })
    },
    TeacherKO: function (action) {
        return swal({
            type: 'error',
            title: `Error ${action} el profesor`,
            showConfirmButton: true,
            timer: 2000
          })
    }

}

module.exports = Modals