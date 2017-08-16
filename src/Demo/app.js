 angular.module('test', ['ng-keybord-select'])
     .controller('TestCtrl', function($scope, $filter, $log) {
<<<<<<< HEAD
         console.log("test 没毛病 Controller");
=======
         console.log("test MDZZ Controller");
>>>>>>> a192c3c1e7493411423471af9ca13838677d0c6b
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