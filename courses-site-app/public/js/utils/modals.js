import swal from 'sweetalert2'
import {translateData} from './utils'

const Modals = {
	PaymentOK: function () {
        swal({
            type: 'success',
            title: '¡Enhorabuena!',
            text: 'PAGO REALIZADO',
            showConfirmButton: true,
            timer: 1500
        })
    },
    UnknownError: function () {
        swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Por favor vuelve a probarlo en unos minutos, no se ha realizado ningún cargo en tu tarjeta',
            showConfirmButton: true,
            timer: 2000
        })
    },
    WrongCard: function() {
        swal({
            type: 'error',
            title: 'Oops...!',
            text: 'Parece que los datos de la tarjeta no son correctos...',
            showConfirmButton: true,
            timer: 2000
        })
    },
    FormError: function (input) {
        swal({
			type: 'error',
			title: 'Oops...',
			html: `Por favor revisa el campo <strong>${translateData(input)}</strong>`,
		})
    }
}

module.exports = Modals