
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)  # Normalize email (lowercase domain)
        user = self.model(email=email, **extra_fields)  # Create user instance
        user.set_password(password)  # Hash password
        user.save(using=self._db)  # Save to DB
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=20)
    contact = models.PositiveBigIntegerField()
    address = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()  # Attach the custom manager
    USERNAME_FIELD = "email"  # Email is the unique identifier
    REQUIRED_FIELDS = ["name", "age", "gender", "contact", "address"]  # Additional required fields

    def _str_(self):
        return self.email

class Doctor(models.Model):
    image = models.FileField(upload_to="doctor_images/")  # Specify upload directory
    name = models.CharField(max_length=50)
    department = models.CharField(max_length=100)
    qualifications = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()

    def _str_(self):
        return f"{self.name} {self.department} {self.qualifications} {self.experience}"





class Appointment(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)  # Renamed 'name' to 'user' for clarity
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()

    def _str_(self):
        return f"Appointment with {self.doctor.name} on {self.date} at {self.time}"