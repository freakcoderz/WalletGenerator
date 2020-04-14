var janin = {};

janin.currency = {
    createCurrency: function (name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate) {
        var currency = {};
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        currency.donate = donate;
        return currency;
    },

    name: function() {
        return janin.selectedCurrency.name;
    },

    networkVersion: function() {
        return janin.selectedCurrency.networkVersion;
    },

    privateKeyPrefix: function() {
        return janin.selectedCurrency.privateKeyPrefix;
    },

    WIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
    },

    CWIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
    },

    // Switch currency
    useCurrency: function(index) {
        janin.selectedCurrency = janin.currencies[index];

        var coinImgUrl = "logos/" + janin.currency.name().toLowerCase() + ".png";
        document.getElementById("coinLogoImg").src = coinImgUrl;

        // Update title depending on currency
        document.title = janin.currency.name() + " " + ninja.translator.get("title");
        document.getElementById("siteTitle").alt = janin.currency.name() + " " + ninja.translator.get("title");

        // Update i18n link
        document.getElementById("cultureen").href = "?culture=en&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturefr").href = "?culture=fr&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturede").href = "?culture=de&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturenl").href = "?culture=nl&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturept").href = "?culture=pt&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureru").href = "?culture=ru&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturees").href = "?culture=es&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureua").href = "?culture=ua&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturetr").href = "?culture=tr&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("cultureit").href = "?culture=it&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturepl").href = "?culture=pl&currency=" + janin.currency.name().toLowerCase();
        document.getElementById("culturezh").href = "?culture=zh&currency=" + janin.currency.name().toLowerCase();

        if(ninja.seeder.isDone())
        {
            // Regenerate a new wallet when not expensive
            ninja.wallets.singlewallet.generateNewAddressAndKey();
            ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value);
            ninja.wallets.brainwallet.view();
        }

        // Reset wallet tab when expensive or not applicable
        document.getElementById("bulktextarea").value = "";
        document.getElementById("suppliedPrivateKey").value = "";

    },
};

janin.currencies = [
    //                              name, 		networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, donate
    janin.currency.createCurrency ("Aevo",                0x17, 0x99, "6",    "P"    , "AT5yCTxC5DEfhCtcGNHRAHn1cZFkhUX8LC"),
	janin.currency.createCurrency ("Bitcoin",             0x00, 0x80, "5",    "[LK]" , "1YYTXP6P6dUz1EuPQdeKaEkwqLWsA4W6Y"),
	janin.currency.createCurrency ("DRV",                 0x1e, 0x31, "2",    "8"    , "DRJk49h5EokywYd1g2bPy8qaFsQwCxFnA1"),
	janin.currency.createCurrency ("FREAK",                 0x23, 0xa3, "6",    "R"    , "DRJk49h5EokywYd1g2bPy8qaFsQwCxFnA1"),
	janin.currency.createCurrency ("MentX",		          0x6e, 0xee, "[89]", "c"    , "XT8bihkXdrsuDMXkPvzMSj3RKC7fbe7D9o"),
	janin.currency.createCurrency ("DRVF",                0x1f, 0xc1, "7",    "V"    , "DakS6tdK3TpoVJF9CB4mCmsC2AXYnJgnat"),
	janin.currency.createCurrency ("SHMN",		      	  0x32, 0xd4, "8",    "Y"    , "MJ3tdcCkTmxjWYwQkcEdket9q2i7xhqwVx"),
	janin.currency.createCurrency ("Stronghands",		  0x3f, 0xbf, "7",    "V"    , "Sc6P7U3kwru3rNYgLo42WyBb5onsMq1s9t"),
                   ];
