import smtplib
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

server_mail = ''

def sendMail(data):
    email = data['email']

    msg = MIMEMultipart()
    msg['Subject'] = 'Vesicles content calculator project data'
    msg['From'] = server_mail
    msg['To'] = email
    msg.preamble = 'preamble'

    body = MIMEText(data['data'])
    msg.attach(body) 

    server_ssl = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server_ssl.ehlo()

    server_ssl.login(server_mail, '')
    
    server_ssl.sendmail(server_mail, email, msg.as_string())
    server_ssl.close()

    return 'Succeed!'