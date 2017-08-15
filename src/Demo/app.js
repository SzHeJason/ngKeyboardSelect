 angular.module('test', ['ng-keybord-select'])
     .controller('TestCtrl', function($scope, $filter, $log) {
         console.log("test 没毛病 Controller");
         var vm = this;
         vm.selectedData = []
         vm.data = [{
             name: "apple"
         }, {
             name: "orange"
         }, {
             name: "banana"
         }]

         vm.checkBoxData = [{
             name: "Cat"
         }, {
             name: "Dog"
         }, {
             name: "Monkey"
         }]

         vm.selectData = [{
             name: "Jason"
         },{
             name: "Lyon"
         },{
             name: "Tom"
         }]
         

         vm.getSelectItems = function() {
             $log.info("Selected Item : ", vm.selectedData)
         }
         return this;
     })