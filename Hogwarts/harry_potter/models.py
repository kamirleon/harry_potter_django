from django.db import models

# Create your models here.

class AreaProducto(models.Model):
    idArea          = models.AutoField(db_column='idArea', primary_key=True) 
    Descripcion     = models.CharField(max_length=30, blank=False, null=False)

    def __str__(self):
        return str(self.Descripcion)

class productos(models.Model):
    idArea           = models.ForeignKey('AreaProducto',on_delete=models.CASCADE, db_column='idArea', verbose_name='idArea') 
    codigo           = models.CharField(primary_key=True, max_length=6, verbose_name='codigo')
    nombre           = models.CharField(max_length=50, verbose_name='nombre')
    descripcion            = models.CharField(max_length=50, verbose_name='descripcion')
    precio           = models.IntegerField()
    Img              = models.ImageField(upload_to='img/', null=True, blank=True, verbose_name='img')
    
    def __str__(self):
        return str(self.nombre)
    class Meta:      
        ordering = ['nombre']

    def delete(self, using=None, keep_parents=False):
        self.Img.storage.delete(self.Img.name)
        return super().delete()

