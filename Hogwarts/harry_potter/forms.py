from django.forms import ModelForm
from django import forms
from .models import productos


class ProductoForm(forms.ModelForm):
    class Meta:
        model = productos 
   
        fields = '__all__' 
