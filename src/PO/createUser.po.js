class CreateUser{
    get email(){
        return $('#email')
    }
    get password(){
        return $('#password')
    }
    get address1 (){
        return $('#address1')
    }
    get address2 (){
        return $('#address2')
    }
    get city (){
        return $('#city')
    }
    get zip(){
        return $('#zip')
    }
    get description(){
        return $('#description')
    }
    async fillForm(data) {
        await this.email.setValue(data.email)
        await this.password.setValue(data.password)
        await this.address1.setValue(data.address1)
        await this.address2.setValue(data.address2)
        await this.city.setValue(data.city)
        await this.zip.setValue(data.zip)
        await this.description.setValue(data.description)
        await $('button*=Create').click()

    }
    
}


module.exports = { CreateUser: new CreateUser() }