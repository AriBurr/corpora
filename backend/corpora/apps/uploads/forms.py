from django import forms

class FileUploadForm(forms.Form):
    title = forms.CharField(max_length=100)
    upload = forms.FileField()


class URLUploadFileForm(forms.Form):
    title = forms.CharField()
    url_upload = forms.CharField()