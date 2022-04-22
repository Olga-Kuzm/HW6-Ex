class Sidebar{
    
    get dashboard(){
        return $('#first-nav-block > li:nth-child(1)')
    }
    get orders (){
        return $('#first-nav-block > li:nth-child(2)')
    }
    get products(){
        return $('#first-nav-block > li:nth-child(3)')
    }
    get customers(){
        return $('#first-nav-block > li:nth-child(4)')
    }
    get reports(){
        return $('#first-nav-block > li:nth-child(5)')
    }
    get integrations(){
        return $('#first-nav-block > li:nth-child(6)')
    }
    get createUser(){
        return $('#first-nav-block > li:nth-child(7)')
    }
    get createManager(){
        return $('#first-nav-block > li:nth-child(8)')
    }
    get createSubscription(){
        return $('#first-nav-block > li:nth-child(9)')
    }
    get listOfUsers(){
        return $('#first-nav-block > li:nth-child(10)')
    }
    get listOfSubscriptions (){
        return $('#first-nav-block > li:nth-child(11)')
    }
    async goToItem (text){
        const element = await $(`*=${text}`)
        return element.click()
    }

}

module.exports = { Sidebar: new Sidebar() }