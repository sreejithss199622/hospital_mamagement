from django.shortcuts import render, redirect
from django.core.exceptions import ValidationError
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser  
from .serializers import CustomUserSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Doctor, Appointment


class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
        
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message": "User registered successfully",
                "user_id": user.id,
                "token": token.key
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class LoginView(APIView):
#     def post(self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")

#         try:
#             user = CustomUser.objects.get(email=email)
#         except CustomUser.DoesNotExist:
#             return Response({"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST)


#         user = authenticate(username=user.email, password=password)  

#         if user:
#             token, created = Token.objects.get_or_create(user=user)
#             return Response({"message": "Login successful", "token": token.key}, status=status.HTTP_200_OK)
        
#         return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)



class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=user.email, password=password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "message": "Login successful",
                "user_id": user.id,  
                "token": token.key
            }, status=status.HTTP_200_OK)

        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class DoctorListView(APIView):
    permission_classes = [AllowAny] 

    def get(self, request):
        print(request)
        doctors = Doctor.objects.all()
        serializer = DoctorSerializer(doctors, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    


 

    
class CreateAppointmentView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        data = request.data.copy()
        
        user_id = data.get("userid")  
        doctor_id = data.get("doctorid")

        
        try:
            user = CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            doctor = Doctor.objects.get(id=doctor_id)
        except Doctor.DoesNotExist:
            return Response({"error": "Doctor not found"}, status=status.HTTP_400_BAD_REQUEST)




        
        appointment = Appointment.objects.create(
            user=user,
            doctor=doctor,
            date=data.get("date"),
            time=data.get("time")
        )

        serializer = AppointmentSerializer(appointment)
        return Response(
            {"message": "Appointment booked successfully", "appointment": serializer.data},
            status=status.HTTP_201_CREATED
        )






class MyAppointmentsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        user_id = request.query_params.get("userid")  
        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Correct ForeignKey lookup
        appointments = Appointment.objects.filter(user_id=user_id)  
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserProfileView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        user_id = request.query_params.get("userid")  
        if not user_id:
            return Response({"error": "User ID is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = CustomUser.objects.get(id=int(user_id))  
        except (CustomUser.DoesNotExist, ValueError):
            return Response({"error": "User not found"}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = CustomUserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)






from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import CustomUser
from .serializers import UserSerializer

class UserProfileView(APIView):
    def get(self, request, user_id):
        try:
            user = CustomUser.objects.get(id=user_id)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, user_id):
        try:
            user = CustomUser.objects.get(id=user_id)
            serializer = UserSerializer(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Profile updated successfully"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)







def admin_login(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        
        user = authenticate(request, username=email, password=password)
        
        if user is not None and user.is_staff:  
            login(request, user)
            return redirect("admin_appointments")  
        else:
            return render(request, "admin_login.html", {"error": "Invalid email or password"})
    
    return render(request, "admin_login.html")



from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)
    return redirect('login')  # Redirect to login page


@login_required
def admin_appointments(request):
    if not request.user.is_staff:
        return redirect("admin_login")  # Restrict non-admin users
    
    date_filter = request.GET.get("date")
    doctor_filter = request.GET.get("doctor")
    
    appointments = Appointment.objects.select_related("user", "doctor").all()
    
    if date_filter:
        appointments = appointments.filter(date=date_filter)
    if doctor_filter:
        appointments = appointments.filter(doctor_name_icontains=doctor_filter)
    
    return render(request, "admin_appointments.html", {"appointments": appointments})


from django.shortcuts import render
from .models import Appointment
from datetime import date

def admin_appointments(request):
    selected_date = request.GET.get('date', date.today())  # Default to today
    doctor_name = request.GET.get('doctor', '')  # Get doctor name filter

    # Filter appointments based on date (and doctor name if provided)
    appointments = Appointment.objects.filter(date=selected_date)
    
    if doctor_name:
        appointments = appointments.filter(doctor__name__icontains=doctor_name)

    appointments = appointments.order_by('time')  # Order by time

    return render(request, 'admin_appointments.html', {
        'appointments': appointments,
        'selected_date': selected_date,
        'selected_doctor': doctor_name
    })


from django.shortcuts import render, get_object_or_404, redirect
from .models import Doctor

def doctor_list(request):
    doctors = Doctor.objects.all()
    return render(request, 'doctor_list.html', {'doctors': doctors})

from django.shortcuts import render, redirect
from .models import Doctor

def add_doctor(request):
    if request.method == "POST":
        name = request.POST['name']
        qualifications = request.POST['qualifications']
        experience = request.POST['years_of_experience']
        department = request.POST['department']
        image = request.FILES.get('image', None)  # Get the uploaded image (if any)

        doctor = Doctor(
            name=name,
            qualifications=qualifications,
            experience=experience,
            department=department,
            image=image
        )
        doctor.save()
        return redirect('doctor_list')  # ✅ Redirect to the doctor list after saving

    return render(request, "add_doctor.html")


from django.shortcuts import render, get_object_or_404, redirect
from .models import Doctor

def edit_doctor(request, doctor_id):
    doctor = get_object_or_404(Doctor, id=doctor_id)

    if request.method == "POST":
        doctor.name = request.POST['name']
        doctor.qualifications = request.POST['qualifications']
        doctor.experience = request.POST['years_of_experience']
        doctor.department = request.POST['department']

        # Handle image update only if a new image is uploaded
        if 'image' in request.FILES:
            doctor.image = request.FILES['image']
        
        doctor.save()
        return redirect('doctor_list')

    return render(request, "doctor_edit.html", {"doctor": doctor})








# from django.shortcuts import render, get_object_or_404, redirect
# from .models import Doctor

# def edit_doctor(request, doctor_id):
#     doctor = get_object_or_404(Doctor, id=doctor_id)

#     if request.method == "POST":
#         doctor.name = request.POST.get("name")
#         doctor.qualifications = request.POST.get("qualifications")
#         doctor.experience = request.POST.get("years_of_experience")
#         doctor.department = request.POST.get("department")

#         if 'image' in request.FILES:
#             doctor.image = request.FILES['image']  # Updating image if provided

#         doctor.save()
#         return redirect("doctor_list")  # Redirect to the doctor list page

#     return render(request, "doctor_edit.html", {"doctor": doctor})




def disable_doctor(request, doctor_id):
    doctor = get_object_or_404(Doctor, id=doctor_id)
    doctor.delete()  # You can modify this to set an 'is_active' flag instead of deleting
    return redirect('doctor_list')



from django.shortcuts import render, get_object_or_404
from .models import CustomUser  # Use CustomUser instead of User

def user_list(request):
    users = CustomUser.objects.all()  # Fetch all users
    return render(request, 'user_list.html', {'users': users})

from django.shortcuts import render, get_object_or_404
from Hospital_admin.models import CustomUser

def view_profile(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    return render(request, 'view_profile.html', {'user': user})



from django.shortcuts import render, get_object_or_404
from .models import CustomUser, Appointment

def user_history(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)  # Fetch the user
    appointments = Appointment.objects.filter(user=user).order_by('-date')  # Fetch appointments using 'user'

    return render(request, 'user_history.html', {'user': user, 'appointments': appointments})



   
from django.shortcuts import render
from django.utils.dateparse import parse_date
from django.db.models import Count
from .models import Doctor, Appointment  # Ensure correct models are imported

def most_viewed(request):
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")

    if start_date and end_date:
        start_date = parse_date(start_date)
        end_date = parse_date(end_date)

        if not start_date or not end_date or start_date > end_date:
            return render(request, "most_viewed_doctors.html", {"error": "Invalid date range"})

        doctors = (
            Doctor.objects.filter(appointment__date__range=[start_date, end_date])
            .annotate(total_appointments=Count("appointment"))
            .order_by("-total_appointments")
        )
    else:
        doctors = (
            Doctor.objects.annotate(total_appointments=Count("appointment"))
            .order_by("-total_appointments")
        )

    return render(
        request,
        "most_viewed_doctors.html",
        {"doctors": doctors, "start_date": start_date, "end_date": end_date},
    )

