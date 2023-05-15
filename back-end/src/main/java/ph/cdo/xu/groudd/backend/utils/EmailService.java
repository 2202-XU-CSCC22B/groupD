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

    public void sendRegistrationEmail(String recipientEmail, String firstName) throws MessagingException {
        // Create a Thymeleaf context and set the variables for dynamic data
        Context context = new Context();
        context.setVariable("firstName", firstName);

        // Render the Thymeleaf email template
        String emailContent = templateEngine.process("registration_email", context);

        // Set the email subject, recipient, and content
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setSubject("Registration");
        helper.setTo(recipientEmail);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }


    public void sendValidationEmail(String recipientEmail, String firstName, String expirationDate) throws MessagingException {
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
        helper.setTo(recipientEmail);
        helper.setText(emailContent, true);

        // Send the email
        mailSender.send(message);
    }


}
