class Checkbox {
    constructor(selector) {
        this.selector = selector;
    }

    set(value) {
        return $(this.selector).click()
    }
}

module.exports = { Checkbox };
