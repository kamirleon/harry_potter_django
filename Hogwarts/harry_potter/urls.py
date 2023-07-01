from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    
    path('', views.index, name='index'),
    path('inicio/', views.Inicio, name='inicio'),
    path('login_user/', views.login_user, name='login_user'),
    path('recuperar/', views.Recuperar, name='recuperar'),
    path('registrar/', views.Registrar, name='registrar'),
    path('productoss/', views.productoss, name='productoss'),
    path('login/', views.login, name='login'),
    

    #crud
    path('nuevoProducto',views.nuevo_Producto,name='nuevoProducto'),
    path('gestion/',views.gesProducto,name='gestion'),
    path('gestion/borrarproducto/<codigo>', views.borrarproducto, name='borrarproducto'),
    path('gestion/editarprod/<codigo>', views.editarprod, name='editarprod'),

    path('accounts/profile/', views.nuevo_Producto, name='profile'),    

]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
