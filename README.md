# ng-keyboard-select
The angular directive can be used to select(mulitselect) item  by 'ctrl' and 'shfit' （使用指令完成系统常见的选择功能,例如ctrl多选，shfit批量选择的功能）

### Demo
________ 
* [Simple Demo](http://codepen.io/SzHeJason/pen/mENBoo?editors=1010)

### Update
--------
* 删除了Event和services,刚开始设计的时候是时候广播事件，来处理选中状态的，但是后来发现这样处理会导致同一页面下不能由多个组件，也就是组件不能独立，所以使用grid-group-data来获取选中的数据
* 加上全选功能(gridCheckAll)

### Bower
--------
```
    bower install --save-dev ng-keyboard-select
```

### Usage
-------
```html
<ANY grid-group grid-select-name>
    <ANY grid-check-all>
    </ANY>
    <ANY grid-selected grid-selected-item grid-selected-disabled>
        .....
    </ANY>
</ANY>
```

### gridGroup Parameters
--------
* **grid-select-name:** 这个属性是用来绑定选择的字段，如果该字段为true则代表代表当前记录已经被选择
* **grid-group-data(新增):** 这个属性是用来绑定选择的数据信息，他最终的得到的结果是选择的数据


### gridSelected Parameters
-------
* **grid-selected-item** 该属性用来绑定当前记录的数据，该数据将会被指令读取
* **grid-selected-disabled** 如果改属性为true，则记录不允许被选中


### Event(已废弃，使用grid-group-data代替所要实现的功能)
-----

* **selectStart** 当你在选择某条记录之前，组件会向上传播该事件
* **selectEnd** 当你选择某条记录之后，组件会向上传播该事件  
```
$rootScope.$on('selectEnd', function(event, data) { //data为你选择的数据 selectItems = data; }) 
```

### Services(已废弃，使用grid-group-data代替所要实现的功能)
------
MulitGrid 提供了两个方法去获取选择的信息 getSelectItems 和 getItemsLength
```
 angular,module('xxx')
        .controller('xxxxxCtrl',['MulitGrid',function(MulitGrid){
            //获取选中的所有数据
            var SelectItems = MulitGrid.getSelectItems();

            //获取选中数据的数量
             var SelectItemLength = MulitGrid.getItemsLength();
        }])
```

