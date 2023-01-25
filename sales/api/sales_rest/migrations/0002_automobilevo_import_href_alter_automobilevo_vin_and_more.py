# Generated by Django 4.0.3 on 2023-01-25 17:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=200, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='automobilevo',
            name='vin',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='address',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='customer',
            name='phone_number',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.PositiveSmallIntegerField(unique=True),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='name',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='salesrecords', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='price',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='salesperson',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='salesrecords', to='sales_rest.salesperson'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='vin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='salesrecords', to='sales_rest.automobilevo'),
        ),
    ]