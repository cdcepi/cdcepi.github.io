
(function(){
var app = angular.module('forecasts', []);
  app.controller('ForecastController', function() {

    this.fdata = forecastData;
    this.region = 'nat';
    this.targets = 'short-term';
    this.fImg = 'images/US_4wk.jpg';
    this.fullName = "National - United States";

    this.setReg = function(setReg) {
      this.region = setReg;
      this.setImg();
    };

    this.checkReg = function(checkReg) {
      return this.region === checkReg;
    };

    this.setTargets = function(newTargets) {
      this.targets = newTargets;
      this.setImg();
    };

    this.checkTargets = function(checkTargets) {
      return this.targets === checkTargets;
    };

    this.setImg = function() {
      for (i = 0; i < this.fdata.length; i++) {
        if (this.fdata[i].region === this.region) {
          this.fullName = this.fdata[i].fullRegion;
          if (this.checkTargets('short-term')) {
            this.fImg = this.fdata[i].shortTerm;
          } else {
            this.fImg = this.fdata[i].seasonal;
          }
        }
      }
    };

  });

  var forecastData = [
      {
        region: "nat",
        fullRegion: "National - United States",
        shortTerm: 'images/US_4wk.jpg',
        seasonal: 'images/US.jpg',
      },
      {
        region: "r1",
        fullRegion: "Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, and Vermont",
        shortTerm: 'images/Reg1_4wk.jpg',
        seasonal: 'images/Reg1.jpg',
      },
      {
        region: "r2",
        fullRegion: "New Jersey, New York, Puerto Rico, and the U.S. Virgin Islands",
        shortTerm: 'images/Reg2_4wk.jpg',
        seasonal: 'images/Reg2.jpg',
      },
      {
        region: "r3",
        fullRegion: "Delaware, District of Columbia, Maryland, Pennsylvania, Virginia, and West Virginia",
        shortTerm: 'images/Reg3_4wk.jpg',
        seasonal: 'images/Reg3.jpg',
      },
      {
        region: "r4",
        fullRegion: "Alabama, Florida, Georgia, Kentucky, Mississippi, North Carolina, South Carolina, and Tennessee",
        shortTerm: 'images/Reg4_4wk.jpg',
        seasonal: 'images/Reg4.jpg',
      },
      {
        region: "r5",
        fullRegion: "Illinois, Indiana, Michigan, Minnesota, Ohio, and Wisconsin",
        shortTerm: 'images/Reg5_4wk.jpg',
        seasonal: 'images/Reg5.jpg',
      },
      {
        region: "r6",
        fullRegion: "Arkansas, Louisiana, New Mexico, Oklahoma, and Texas",
        shortTerm: 'images/Reg6_4wk.jpg',
        seasonal: 'images/Reg6.jpg',
      },
      {
        region: "r7",
        fullRegion: "Iowa, Kansas, Missouri, and Nebraska",
        shortTerm: 'images/Reg7_4wk.jpg',
        seasonal: 'images/Reg7.jpg',
      },
      {
        region: "r8",
        fullRegion: "Colorado, Montana, North Dakota, South Dakota, Utah, and Wyoming",
        shortTerm: 'images/Reg8_4wk.jpg',
        seasonal: 'images/Reg8.jpg',
      },
      {
        region: "r9",
        fullRegion: "Arizona, California, Hawaii, and Nevada",
        shortTerm: 'images/Reg9_4wk.jpg',
        seasonal: 'images/Reg9.jpg',
      },
      {
        region: "r10",
        fullRegion: "Alaska, Idaho, Oregon, and Washington",
        shortTerm: 'images/Reg10_4wk.jpg',
        seasonal: 'images/Reg10.jpg',
      }
  ];

})();
