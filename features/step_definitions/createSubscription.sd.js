const { When, Then, Given } = require('@cucumber/cucumber');
const { CreateUser } = require('../../src/PO/CreateUser.po')
const {Sidebar} = require('../../src/PO/sidebar.po')
const Subscribe = require('../../src/PO/forms/subscribe.model');
const { addAttachment }= require('@wdio/allure-reporter').default
const { Table } = require('../../src/PO/tables/table.po')


When('I go to {string} menu item', async function (item) {
    Sidebar.goToItem(item)
    
});
When ('I fill the form:', async function(table){
    const data = table.hashes()    
    for(const i of data){       
        await CreateUser.fillForm(i)        
        await $('*=Create User').click()
        i.user = i.email
    }    
    this.data = data 
})
When ('I create new Subscriptions', async function(){
   const arr = []
    for (const i of this.data){
        const obj = {}
        for(const elModel of Subscribe.model){
            const el = new elModel.type(elModel.selector);
            await el.set(i[elModel.name]);
            await browser.pause(200);
            obj[elModel.name] = i[elModel.name]
        }
        obj.suspend = "on"
        arr.push(obj)        
        await $('button[type="submit"]').click()
        await $(`*=Create Subscription`).click()
    }
    this.subscribeInfo = arr
    addAttachment('info', JSON.stringify(arr), 'text/plain')
})

 Then('I check List of Subscriptions', async function(){
     await browser.pause(200)
     const list = await Table.data()
     for( const i of list){
        delete i.total
        if(i.plan === "EDU"){
            i.plan = "Education"           
        }
        else if(i.plan === "PREM"){
            i.plan = "Premium"            
        }
        else if(i.plan === "ENT"){
            i.plan = "Enterprise"            
        }
     }

     expect (list).toEqual(this.subscribeInfo)

 })
