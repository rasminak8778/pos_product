# -*- coding: utf-8 -*-
from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    """pos.config fields"""
    prod_discount = fields.Float(string='Session Discount %',
                                 config_parameter='pos_product.prod_discount',
                                 related='pos_config_id.prod_discount',
                                 help='The discount limit amount',
                                 readonly=False)
