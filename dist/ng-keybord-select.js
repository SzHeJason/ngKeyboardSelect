 angular.module('ng-keybord-select', [])
     //grid多选的组别
     .directive('gridGroup', [function() {
         return {
             scope: {
                 gridSelect: '@',
             },
             bindToController: true,
             controllerAs: "vm",
             controller: ['$element', '$attrs', function(ele, attrs) {
                 var vm = this;
                 var preIndex;
                 var pushNum;
                 var nowIndex;
                 var itemName;
                 var index = 0;
                 vm.Items = [];
                 vm.itemName = "item";
                 vm.addItem = function(item) {
                     item.index = index ++;
                     vm.Items.push(item);
                 }
                 vm.mulitSelectItem = function(item) {
                     nowIndex = item.index;
                     pushNum = Math.abs(nowIndex - preIndex);
                     angular.forEach(vm.Items, function(value, key) {
                         if (nowIndex > preIndex) {
                             //向下选择,向上处理
                             for (preIndex; preIndex < nowIndex; preIndex++) {
                                 vm.Items[preIndex + 1].isSelected = true
                             }
                         } else if (nowIndex < preIndex) {
                             //向上选择,向下处理
                             for (preIndex; preIndex > nowIndex; preIndex--) {
                                 vm.Items[preIndex - 1].isSelected = true
                             }
                         }
                     })
                 }
                 vm.selectItem = function(item) {
                     item.isSelected = !!!item.isSelected;
                     preIndex = item.index;
                 }
                 vm.selectSingleItem = function(item) {
                     item[vm.gridSelect] = !!!item[vm.gridSelect];
                     angular.forEach(vm.Items, function(value, key) {
                         if (item[vm.gridSelect] && item.$$hashKey != value.$$hashKey) {
                             value[vm.gridSelect] = false;
                         }else{
                             preIndex = key;
                         }
                     })
                 }
                 return vm;
             }],
             link: function(scope, ele, attrs, ctrls) {

             }
         }
     }])
     //grid多选功能实现，item容器
     .directive('gridSelected', [function() {
         return {
             require: '^gridGroup',
             link: function(scope, ele, attrs, ctrls) {
                 var item = scope[attrs.gridSelected]
                 ctrls.addItem(item)
                 ele.on('click', function(e) {
                     scope.$apply(function() {
                         if (e.ctrlKey || e.metaKey) {
                             ctrls.selectItem(item);
                         } else if (e.shiftKey) {
                             ctrls.mulitSelectItem(item);
                         } else {
                             ctrls.selectSingleItem(item);
                         }
                     });
                 })
             }
         }
     }])