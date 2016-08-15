angular.module('test', ['ng-keybord-select'])
    .controller('TestCtrl', function() {
        var vm = this;
        vm.data = [{
                name: "张三"
            }, {
                name: "张三"
            }, {
                name: "张三"
            }, {
                name: "张三"
            }, {
                name: "张三"
            }, {
                name: "张三"
            }

        ]

        return this;
    })