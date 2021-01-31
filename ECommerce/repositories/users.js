const fs = require('fs')
const crypto = require('crypto')
const util = require('util')
const Repository = require('./repository')

const scrypt = util.promisify(crypto.scrypt)

const SCRYPT_OPTIONS = 64

class UsersRepository extends Repository
{
    async create(attrs)
    {
        attrs.id = this.randomID()

        const salt = crypto.randomBytes(8).toString('hex')
        const buf = await scrypt(attrs.password, salt, SCRYPT_OPTIONS)

        const records = await this.getAll()
        const record = {
            ...attrs,
            password : `${buf.toString('hex')}.${salt}`
        }
        //this annotation means take all objects from attrs,then overwrite anything we specify after this

        records.push(record)

        await this.writeAll(records)

        return record
    }

    async comparePasswords(saved, supplied)
    {
        //saved -> password saved in our DB. 'hashed.salt'
        //supplied -> password supplied by user to try signing in
        const [hashed, salt] = saved.split('.')
        const hashedSuppliedBuf = await scrypt(supplied, salt, SCRYPT_OPTIONS)

        return hashed === hashedSuppliedBuf.toString('hex')
    }
}

module.exports = new UsersRepository('users.json')