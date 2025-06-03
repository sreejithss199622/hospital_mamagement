from django.urls import  include, path
from Hospital_admin import  views
from Hospital_admin.views import logout_view


from Hospital_admin.views import DoctorListView, CreateAppointmentView, MyAppointmentsView, UserProfileView, most_viewed, edit_doctor

urlpatterns = [
   
  # path('admin-login/', views.login, name='admin_login'),

path('admin-login/', views.admin_login, name='admin_login'),
path('logout/', logout_view, name='logout'),
path("admin-appointments/", views.admin_appointments, name="admin_appointments"),

path('doctorlist/', views.doctor_list, name='doctor_list'),
path('add-doctor/', views.add_doctor, name='add_doctor'),
path("doctor/edit/<int:doctor_id>/", edit_doctor, name="edit_doctor"),
  

path('user-list/', views.user_list, name='user_list'),
path('view-profile/<int:user_id>/', views.view_profile, name='view_profile'),
path('user-history/<int:user_id>/', views.user_history, name='user_history'),
path('most-viewed-doctors/', most_viewed, name='most_viewed_doctors'), 


  path('api/register/', views.RegisterView.as_view(), name='register'),
  path('api/login/', views.LoginView.as_view(), name='login'),
  path('api/doctors/', DoctorListView.as_view(), name='doctors'),
  path('api/bookappointment/', CreateAppointmentView.as_view(), name='bookappointment'),
  path('api/myappointment/', MyAppointmentsView.as_view(), name='myappointment'),
  # path('api/profile/', UserProfileView.as_view(), name='profile'),
   path("api/profile/<int:user_id>/", UserProfileView.as_view(), name="profile"),
  # path('api/editprofile/', EditProfileView.as_view(), name='editprofile'),
  

]

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
