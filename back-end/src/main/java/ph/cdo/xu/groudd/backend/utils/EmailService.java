package ph.cdo.xu.groudd.backend.utils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class EmailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Autowired
    public EmailService(JavaMailSender mailSender, TemplateEngine templateEngine) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
    }

    public void sendRegistrationEmail(String email, String firstName) throws MessagingException {
        // Create a Thymeleaf context and set the variables for dynamic data
        Context context = new Context();
        context.setVariable("firstName", firstName);

        // Render the Thymeleaf email template
        String emailContent = templateEngine.process("registration_email", context);

        // Set the email subject, recipient, and content
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setSubject("Registration");
        helper.setTo(email);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }


    public void sendValidationEmail(String email, String firstName, String expirationDate) throws MessagingException {
        // Create a Thymeleaf context and set the variables for dynamic data
        Context context = new Context();
        context.setVariable("firstName", firstName);
        context.setVariable("expirationDate", expirationDate);

        // Render the Thymeleaf email template
        String emailContent = templateEngine.process("registration_success", context);

        // Set the email subject, recipient, and content
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setSubject("Registration Complete!");
        helper.setTo(email);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }

    public void sendStaffRegistrationEmail(String email, String firstName, String password) throws MessagingException {
        Context context = new Context();
        context.setVariable("email", email);
        context.setVariable("firstName", firstName);
        context.setVariable("password", password);

        String emailContent = templateEngine.process("staff_registration_success", context);
        // Set the email subject, recipient, and content
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setSubject("Staff Registration");
        helper.setTo(email);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }

    public void sendAnnouncementEmail(String email, String body, String subject) throws MessagingException {
        Context context = new Context();

        context.setVariable("body", body);


        String emailContent = templateEngine.process("send_announcement_email", context);
        // Set the email subject, recipient, and content
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setSubject(subject);
        helper.setTo(email);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }


}
