# -*- coding: utf-8 -*-
from odoo import fields, models


class ProductDiscount(models.Model):
    """Inherited new field into settings"""
    _inherit = 'pos.config'

    prod_discount = fields.Float(string='Session Discount',
                                 help='The discount limit amount')


