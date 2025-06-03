from rest_framework import serializers
from .models import CustomUser, Doctor, Appointment

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'age', 'gender', 'contact', 'address', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return CustomUser.objects.create_user(**validated_data)


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'image', 'name', 'department', 'qualifications', 'experience']

class AppointmentSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    doctor = DoctorSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = ['id', 'user', 'doctor', 'date', 'time']


        from rest_framework import serializers
from .models import CustomUser  # Ensure this imports your user model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser  # Ensure you are using the correct user model
        fields = ["id", "name", "email", "age", "gender", "contact", "address"]
