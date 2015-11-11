 var denmarkApp = angular.module("denmarkApp", []);
    denmarkApp.controller("DenmarkController", function() {
        var DenList = this;
        DenList.DenThings = [{
            text: 'Royal Dansk',
            done: true
        }, {
            text: 'Hans Christian Andersen',
            done: false
        }, {
            text: 'Lego',
            done: false
        }];


        DenList.addDenThing = function() {
            DenList.DenThings.push({
                text: DenList.DenThingText,
                done: false
            });
            DenList.DenThingText = '';
        };

        DenList.checked = function() {
            var count = 0;
            angular.forEach(DenList.DenThings, function(DenThing) {
                count += DenThing.done ? 0 : 1;
            });
            return count;
        };

        DenList.remove = function() {
            var oldDenThings = DenList.DenThings;
            DenList.DenThings = [];
            angular.forEach(oldDenThings, function(DenThing) {
                if (!DenThing.done) DenList.DenThings.push(DenThing);
            });
        };
    });





    var swedenApp = angular.module("swedenApp", []);
    swedenApp.controller("SwedenController", function() {
        var SweList = this;
        SweList.SweThings = [{
            text: 'Ingmar & Ingrid Bergman',
            done: true
        }, {
            text: 'Pippi Longstocking',
            done: true
        }, {
            text: 'Swedish Fish',
            done: false
        }];


        SweList.addSweThing = function() {
            SweList.SweThings.push({
                text: SweList.SweThingText,
                done: false
            });
            SweList.SweThingText = '';
        };

        SweList.checked = function() {
            var count = 0;
            angular.forEach(SweList.SweThings, function(SweThing) {
                count += SweThing.done ? 0 : 1;
            });
            return count;
        };

        SweList.remove = function() {
            var oldSweThings = SweList.SweThings;
            SweList.SweThings = [];
            angular.forEach(oldSweThings, function(SweThing) {
                if (!SweThing.done) SweList.SweThings.push(SweThing);
            });
        };
    });



    var norwayApp = angular.module("norwayApp", []);
    norwayApp.controller("NorwayController", function() {
        var NorList = this;
        NorList.NorThings = [{
            text: 'Hamsun',
            done: true
        }, {
            text: 'Gaahl',
            done: true
        }, {
            text: 'Karl Ove',
            done: false
        }];


        NorList.addNorThing = function() {
            NorList.NorThings.push({
                text: NorList.NorThingText,
                done: false
            });
            NorList.NorThingText = '';
        };

        NorList.checked = function() {
            var count = 0;
            angular.forEach(NorList.NorThings, function(NorThing) {
                count += NorThing.done ? 0 : 1;
            });
            return count;
        };

        NorList.remove = function() {
            var oldNorThings = NorList.NorThings;
            NorList.NorThings = [];
            angular.forEach(oldNorThings, function(NorThing) {
                if (!NorThing.done) NorList.NorThings.push(NorThing);
            });
        };
    });



    var finlandApp = angular.module("finlandApp", []);
    finlandApp.controller("FinlandController", function() {
        var FinList = this;
        FinList.FinThings = [{
            text: 'Moomins',
            done: true
        }, {
            text: 'Marimeko',
            done: true
        }, {
            text: 'Kalevala',
            done: false
        }];


        FinList.addFinThing = function() {
            FinList.FinThings.push({
                text: FinList.FinThingText,
                done: false
            });
            FinList.FinThingText = '';
        };

        FinList.checked = function() {
            var count = 0;
            angular.forEach(FinList.FinThings, function(FinThing) {
                count += FinThing.done ? 0 : 1;
            });
            return count;
        };

        FinList.remove = function() {
            var oldFinThings = FinList.FinThings;
            FinList.FinThings = [];
            angular.forEach(oldFinThings, function(FinThing) {
                if (!FinThing.done) FinList.FinThings.push(FinThing);
            });
        };
    });


    var icelandApp = angular.module("icelandApp", []);
    icelandApp.controller("IcelandController", function() {
        var IceList = this;
        IceList.IceThings = [{
            text: 'Hidden folks',
            done: true
        }, {
            text: 'Black Shore',
            done: true
        }, {
            text: 'Sigur Ros',
            done: false
        }];


        IceList.addIceThing = function() {
            IceList.IceThings.push({
                text: IceList.IceThingText,
                done: false
            });
            IceList.IceThingText = '';
        };

        IceList.checked = function() {
            var count = 0;
            angular.forEach(IceList.IceThings, function(IceThing) {
                count += IceThing.done ? 0 : 1;
            });
            return count;
        };

        IceList.remove = function() {
            var oldIceThings = IceList.IceThings;
            IceList.IceThings = [];
            angular.forEach(oldIceThings, function(IceThing) {
                if (!IceThing.done) IceList.IceThings.push(IceThing);
            });
        };
    });


    var faroeApp = angular.module("faroeApp", []);
    faroeApp.controller("FaroeController", function() {
        var FaroeList = this;
        FaroeList.FaroeThings = [{
            text: 'Tyr',
            done: true
        }, {
            text: 'Sheeps',
            done: true
        }, {
            text: 'Rasmus Rasmussen',
            done: false
        }];


        FaroeList.addFaroeThing = function() {
            FaroeList.FaroeThings.push({
                text: FaroeList.FaroeThingText,
                done: false
            });
            FaroeList.FaroeThingText = '';
        };

        FaroeList.checked = function() {
            var count = 0;
            angular.forEach(FaroeList.FaroeThings, function(FaroeThing) {
                count += FaroeThing.done ? 0 : 1;
            });
            return count;
        };

        FaroeList.remove = function() {
            var oldFaroeThings = FaroeList.FaroeThings;
            FaroeList.FaroeThings = [];
            angular.forEach(oldFaroeThings, function(FaroeThing) {
                if (!FaroeThing.done) FaroeList.FaroeThings.push(FaroeThing);
            });
        };
    });