const Utils = {
	validateData: function (data) {
		let missing
		Object.keys(data).forEach(function(key,index) {
			if (!data[key] && !missing) {
				missing = key
			}
		})

		return missing ? missing : 'OK'
	},

	translateData: function (word) {
		switch (word) {
			case 'name': 
				return 'Nombre'
			case 'surname':
				return 'Apellido'
			case 'dni':
				return 'DNI'
			case 'phone':
				return 'Teléfono'
			case 'email':
				return 'Correo electrónico'
			case 'address':
				return 'Dirección de Facturación'
			case 'city':
				return 'Población'
			case 'cp':
				return 'Código Postal'
		}
	}
}

module.exports = Utils