class Software {
    constructor(name) {
        this.name = name
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

const app = new Software("GenericApp")
app.run()


class Plugin {
    constructor(id) {
        this.id = id
    }

    activate() {
        console.log(`Plugin "${this.id}" activated`)
    }
}

const adblock = new Plugin("ad-blocker")
adblock.activate()


class Browser extends Software {
    constructor(name) {
        super(name)
        this.installedPlugins = []
    }

    installPlugin(pluginInstance) {
        this.installedPlugins.push(pluginInstance)
        console.log(`Plugin "${pluginInstance.id}" installed into ${this.name}`)
    }

    enableAllPlugins() {
        console.log(`Enabling all plugins in ${this.name}`)
        this.installedPlugins.forEach(p => {
            p.activate()
        })
    }
}

const chromeLike = new Browser("MyBrowser")
chromeLike.run()
chromeLike.installPlugin(adblock)
chromeLike.installPlugin(new Plugin("dark-mode"))
chromeLike.enableAllPlugins()


Software.prototype.update = function () {
    console.log(`${this.name} is updating`)
}

chromeLike.update()
