define(["exports","jquery","ko","underscore","uiComponent","Magento_Customer/js/customer-data"],function(e,t,s,a,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=u(t),c=u(s),n=u(a);function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t}var l=r.extend({defaults:{cookieMessages:[],messages:[]},cart:{},displaySubtotal:c.observable(!0),initialize:function(){var t=this;this._super(),this.cart=i.get("cart"),this.cartData=i.get("cart"),this.wishlist=i.get("wishlist"),this.compare=i.get("compare-products"),this.cookieMessages=o.cookieStorage.get("mage-messages"),this.messages=i.get("messages").extend({disposableCustomerData:"messages"}),n.isEmpty(this.messages().messages)||i.set("messages",{}),this.update(this.cartData()),this.cartData.subscribe(function(e){t.update(e)})},update:function(e){var s=this;n.each(e,function(e,t){s.cart.hasOwnProperty(t)||(s.cart[t]=c.observable()),s.cart[t](e)})},getCartParam:function(e){return n.isUndefined(e)||this.cart.hasOwnProperty(e)||(this.cart[e]=c.observable()),this.cart[e]()},scroll:function(e,t){o("html, body").animate({scrollTop:0},800)}});e.default=l});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2lkZS5lczYuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY3VzdG9tZXJEYXRhIiwiJCIsImtvIiwiXyIsImFwcCIsImV4dGVuZCIsImRlZmF1bHRzIiwiY29va2llTWVzc2FnZXMiLCJjYXJ0IiwiZGlzcGxheVN1YnRvdGFsIiwib2JzZXJ2YWJsZSIsImluaXRpYWxpemUiLCJfdGhpcyIsInRoaXMiLCJfc3VwZXIiLCJnZXQiLCJjYXJ0RGF0YSIsIndpc2hsaXN0IiwiY29tcGFyZSIsImNvb2tpZVN0b3JhZ2UiLCJtZXNzYWdlcyIsImRpc3Bvc2FibGVDdXN0b21lckRhdGEiLCJpc0VtcHR5Iiwic2V0IiwidXBkYXRlIiwic3Vic2NyaWJlIiwidXBkYXRlZENhcnQiLCJfdGhpczIiLCJlYWNoIiwidmFsdWUiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImdldENhcnRQYXJhbSIsImlzVW5kZWZpbmVkIiwibmFtZSIsInNjcm9sbCIsImV2ZW50Iiwic2Nyb2xsVG9wIl0sIm1hcHBpbmdzIjoiNkNBRzBCLGNBQ0csc0RBRHZCQSxFQUNBQyxxRUFKTUMsT0FDQUMsT0FDQUMsZ0tBSVosSUFBSUMsRUFBTUwsRUFBVU0sT0FBTyxDQUN2QkMsU0FBVSxDQUNOQyxlQUFnQixHQVBaTCxTQVFNLElBRWRNLEtBQU0sR0FDTkMsZ0JBQWlCUCxFQUFHUSxZQUFXLEdBQy9CQyxXQUFZLFdBQVksSUFBQUMsRUFBQUMsS0FDcEJBLEtBQUtDLFNBQ0xELEtBQUtMLEtBQU9SLEVBQWFlLElBQUksUUFDN0JGLEtBQUtHLFNBQVdoQixFQUFhZSxJQUFJLFFBQ2pDRixLQUFLSSxTQUFXakIsRUFBYWUsSUFBSSxZQUNqQ0YsS0FBS0ssUUFBVWxCLEVBQWFlLElBQUksb0JBQ2hDRixLQUFLTixlQUFpQk4sRUFBRWtCLGNBQWNKLElBQUksaUJBQzFDRixLQUFLTyxTQUFXcEIsRUFBYWUsSUFBSSxZQUFZVixPQUFPLENBQ2hEZ0IsdUJBQXdCLGFBR3ZCbEIsRUFBRW1CLFFBQVFULEtBQUtPLFdBQVdBLFdBQzNCcEIsRUFBYXVCLElBQUksV0FBWSxJQUdqQ1YsS0FBS1csT0FBT1gsS0FBS0csWUFDakJILEtBQUtHLFNBQVNTLFVBQVUsU0FBQ0MsR0F2QjdCdEIsRUFBTUwsT0FBVU0sTUFHWmUsT0FBQUEsU0FBVU0sR0FBQSxJQUFBQyxFQUFBZCxLQUZKVixFQURheUIsS0FBQUYsRUFBQSxTQUFBRyxFQUFBQyxHQUFBSCxFQUFBbkIsS0FBQXVCLGVBQUFELEtBTXZCckIsRUFBQUEsS0FBaUJQLEdBQUdRLEVBQUFBLGNBQ0lpQixFQUFBbkIsS0FBQXNCLEdBQUFELE1BRXBCRyxhQUFLeEIsU0FBT1IsR0FLd0MsT0FKcERHLEVBQUE4QixZQUFBQyxJQUNLakIsS0FBQUEsS0FBTGMsZUFBNkJoQixLQUM3QkYsS0FBS0ssS0FBTGdCLEdBQWVsQyxFQUFBQSxjQUVmYSxLQUFBTCxLQUFBMEIsTUFJQUMsT0FBQSxTQUFPYixFQUFRYyxHQUNYcEMsRUFBQUEsY0FBQUEsUUFBQSxDQUNIcUMsVUFBQSxHQTJCRSxrQkF4QkhqQyIsImZpbGUiOiJNYWdlbnRvX1RoZW1lL3dlYi9qcy9pbnNpZGUuZXM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICogYXMga28gZnJvbSAna28nO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmNvbnN0IENvbXBvbmVudCA9IHJlcXVpcmUoJ3VpQ29tcG9uZW50Jyk7XG5jb25zdCBjdXN0b21lckRhdGEgPSByZXF1aXJlKCdNYWdlbnRvX0N1c3RvbWVyL2pzL2N1c3RvbWVyLWRhdGEnKTtcblxubGV0IGFwcCA9IENvbXBvbmVudC5leHRlbmQoe1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGNvb2tpZU1lc3NhZ2VzOiBbXSxcbiAgICAgICAgbWVzc2FnZXM6IFtdXG4gICAgfSxcbiAgICBjYXJ0OiB7fSxcbiAgICBkaXNwbGF5U3VidG90YWw6IGtvLm9ic2VydmFibGUodHJ1ZSksXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLmNhcnQgPSBjdXN0b21lckRhdGEuZ2V0KCdjYXJ0Jyk7XG4gICAgICAgIHRoaXMuY2FydERhdGEgPSBjdXN0b21lckRhdGEuZ2V0KCdjYXJ0Jyk7XG4gICAgICAgIHRoaXMud2lzaGxpc3QgPSBjdXN0b21lckRhdGEuZ2V0KCd3aXNobGlzdCcpO1xuICAgICAgICB0aGlzLmNvbXBhcmUgPSBjdXN0b21lckRhdGEuZ2V0KCdjb21wYXJlLXByb2R1Y3RzJyk7XG4gICAgICAgIHRoaXMuY29va2llTWVzc2FnZXMgPSAkLmNvb2tpZVN0b3JhZ2UuZ2V0KCdtYWdlLW1lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBjdXN0b21lckRhdGEuZ2V0KCdtZXNzYWdlcycpLmV4dGVuZCh7XG4gICAgICAgICAgICBkaXNwb3NhYmxlQ3VzdG9tZXJEYXRhOiAnbWVzc2FnZXMnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghXy5pc0VtcHR5KHRoaXMubWVzc2FnZXMoKS5tZXNzYWdlcykpIHtcbiAgICAgICAgICAgIGN1c3RvbWVyRGF0YS5zZXQoJ21lc3NhZ2VzJywge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5jYXJ0RGF0YSgpKTtcbiAgICAgICAgdGhpcy5jYXJ0RGF0YS5zdWJzY3JpYmUoKHVwZGF0ZWRDYXJ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh1cGRhdGVkQ2FydCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAodXBkYXRlZENhcnQpIHtcbiAgICAgICAgXy5lYWNoKHVwZGF0ZWRDYXJ0LCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhcnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydFtrZXldID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jYXJ0W2tleV0odmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldENhcnRQYXJhbTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FydC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydFtuYW1lXSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRbbmFtZV0oKTtcbiAgICB9LFxuICAgIHNjcm9sbDogZnVuY3Rpb24gKGRhdGEsIGV2ZW50KSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCA4MDApO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7Il19
