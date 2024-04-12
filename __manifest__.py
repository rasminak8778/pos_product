{
    'name': 'POS Discount',
    'version': '17.0.1.0.0',
    'description': 'POS Discount',
    'category': 'Point of Sale/POS Discount',
    'summary': 'POS Discount',
    'installable': True,
    'application': True,
    'depends': [
        'base',
        'point_of_sale',
        ],
    'data': [
        'views/product_discount_views.xml',
    ],
    'assets':{
            'point_of_sale._assets_pos':[
                '/pos_product/static/src/js/product_discount.js',
            ]
    }
}