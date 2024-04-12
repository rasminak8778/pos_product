/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { Order } from "@point_of_sale/app/store/models";
import { ormService } from "@web/core/orm_service";
import { ErrorPopup } from "@point_of_sale/app/errors/popups/error_popup";
import { _t } from "@web/core/l10n/translation";


patch(Order.prototype, {
        pay() {
        console.log("this", this)
          const currentSessionId = this.pos.pos_session.id;
          this.env.services.orm.call("pos.session", "get_total_discount", [[currentSessionId]]).then((amount)=>{
            console.log(amount,'amount')
            console.log(this.pos.pos_session.id,'this')
            var order = this.orderlines
            var amounts = amount
            for(let orders of order){
                console.log('orders',orders)
                var discount = orders.discount
                console.log('discount',discount)
                amounts +=discount
            }
            console.log('total dis',amounts)
            if (amounts >this.pos.config.prod_discount){
                console.log('totsdal dis',amounts)
                this.env.services.popup.add(ErrorPopup, {
                title: _t("Error"),
                body: _t("Session Discount limit Exceeds..."),
                });
            }
            else{
                return {
                    ...super.pay(),
                };
            }
        })
    },
});
