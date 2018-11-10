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
    }

}

module.exports = Modals