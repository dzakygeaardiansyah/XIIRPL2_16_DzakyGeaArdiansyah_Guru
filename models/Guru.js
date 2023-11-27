const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nik: {
        type: 'string',
        required: [true, 'Silahkan masukan nik anda'],
        unique: true
    },
    nama: {
        type: 'string',
        required: [true, 'Silahkan masukan nama anda'],
        unique: true
    },
    alamat: {
        type: 'string',
        required: [true, 'Silahkan masukan alamat anda']

    },
    no_telp: {
        type: 'string',
        required: [true, 'Silahkan masukan no telp anda']

    },
    pendidikan_terakhir: {
        type: 'string',
        required: [true, 'Silahkan masukan pendidikan terakhir anda']
    },
    jenis_kelamin: {
        type: 'string',
        required: [true, 'Silahkan masukan jenis kelamin anda']

    },
    mapel_yang_diampu: {
        type: 'string',
        required: [true, 'Silahkan masukan mapel yang anda ampu']

    }
})

module.exports = mongoose.model('Listteacher', UserSchema)