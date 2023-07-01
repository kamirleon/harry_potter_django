from django.contrib import admin
from .models import AreaProducto, productos

# Register your models here.
class ProductosAdmin(admin.ModelAdmin):
    list_display = ['idArea','codigo','nombre','descripcion','precio','Img']

admin.site.register(AreaProducto)
admin.site.register(productos, ProductosAdmin)

