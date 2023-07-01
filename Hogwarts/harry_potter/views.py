from django.shortcuts import render, redirect
from .models import productos
from .forms import ProductoForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

# Create your views here.

def index(request):
    return render(request,'index.html')

def Inicio(request):
    return render(request,'inicio.html')


def login_user(request):
    return render(request,'login_user.html')


def Recuperar(request):
    return render(request,'recuperar.html')


def Registrar(request):
    return render(request,'register.html')

def productoss(request):
    Productos = productos.objects.all()
    context={"productos":Productos}
    return render(request,'productoss.html',context)


#CRUDDDDDDDD
def nuevo_Producto(request):

    formulario = ProductoForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
       formulario.save()
       return redirect('productoss')

    return render(request,'crudproductos/nuevoProducto.html',{"formulario":formulario})

@login_required
def gesProducto(request):
    Productos = productos.objects.all()
    context={"productos":Productos}
    return render(request,'crudproductos/gestion.html',context)

@login_required    
def borrarproducto(request, codigo):
    Productos = productos.objects.get(codigo=codigo)
    Productos.delete()
    messages.success(request, '¡Producto Eliminado!')
    return redirect('gestion')

@login_required
def editarprod(request, codigo):
    Productos = productos.objects.get(codigo=codigo)
    formulario = ProductoForm(request.POST or None, request.FILES or None, instance=Productos)
    if formulario.is_valid() and request.POST:
       formulario.save()
       return redirect('gestion')
    return render(request, "crudproductos/modificarProducto.html", {"formulario": formulario})


#Crear funciones de usuarios

def login(request):
    return render(request,'productoss.html')

def salir(request):
    logout(request)
    return redirect('/')