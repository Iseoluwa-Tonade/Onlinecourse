from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows courses to be viewed.
    """
    queryset = Course.objects.all().order_by('-created_at')
    serializer_class = CourseSerializer
