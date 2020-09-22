class HomePage{

    get pageHeader() {
        return $('h1')
    }

    get pageSubHeader() {
        return $('h2')
    }

    get productLnk() {
        return $('span.nav-label')
    }

    get platformLnk() {
        return $('/html/body/header/nav/div/div/ul/li[2]/a')
    }

    get companyLnk() {
        return $('/html/body/header/nav/div/div/ul/li[3]/span')
    }

    get resourcesLnk() {
        return $('/html/body/header/nav/div/div/ul/li[2]/a/html/body/header/nav/div/div/ul/li[3]/span')
    }

    get customersLnk() {
        return $('/html/body/header/nav/div/div/ul/li[5]/a')
    }

    get supportLnk() {
        return $('/html/body/header/nav/div/div/ul/li[6]/span')
    }

}

module.exports = new HomePage();

