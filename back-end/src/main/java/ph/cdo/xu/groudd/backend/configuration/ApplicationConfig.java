package ph.cdo.xu.groudd.backend.configuration;

import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import org.joda.time.DateTime;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;
import ph.cdo.xu.groudd.backend.entity.member.MembershipDetails;
import ph.cdo.xu.groudd.backend.entity.model.BirthDetails;
import ph.cdo.xu.groudd.backend.entity.model.ContactDetails;
import ph.cdo.xu.groudd.backend.entity.model.Name;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;

import java.util.Date;
import java.util.Properties;
import java.util.Random;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

//    @Bean
//    public CommandLineRunner commandLineRunner(
//            @Autowired Faker faker,
//            @Autowired Random ran,
//            @Autowired MemberService memberService){
//        return args -> {
//            double minimum = 50.0;
//            double maximum = 100.0;
//            for(int i = 0; i < 50; i++){
//               String firstName = faker.name().firstName();
//               String lastName = faker.name().lastName();
//               String email = firstName+lastName + "@gmail.com";
//               String address = faker.address().streetName();
//               double weight = minimum + (maximum - minimum) * ran.nextDouble();
//               double height = minimum + (maximum - minimum) * ran.nextDouble();
//               String phone = faker.phoneNumber().cellPhone();
//               String occupation = faker.job().title();
//
//
//               //For Birthday
//                Date birthday = getRandomDate(1980);
//                Date startDate = getRandomDate(2022);
//                memberService.add((Member) Member
//                        .builder()
//                                .weight(weight)
//                                .height(height)
//                                .occupation(occupation)
//                                .address(address)
//                                .membershipDetails(
//                                        MembershipDetails.builder()
//                                                .membershipStatus(Status.values()[ran.nextInt(Status.values().length)])
//                                                .monthlySubscriptionStatus(Status.values()[ran.nextInt(Status.values().length)])
//                                                .studentStatus(Status.values()[ran.nextInt(Status.values().length)])
//                                                .build())
//                                .name(
//                                        Name
//                                                .builder()
//                                                .firstName(firstName)
//                                                .lastName(lastName)
//                                                .build())
//                                .contactDetails(
//                                        ContactDetails
//                                            .builder()
//                                            .email(email)
//                                            .phone(phone)
//                                            .build())
//                                .birthDetails(
//                                        BirthDetails
//                                            .builder()
//                                            .birthday(birthday)
//                                            .build())
//                                .gender(Gender.values()[ran.nextInt(Status.values().length)])
//                                .build());
//
//            }
//        };
//    }


    @Bean
    public Faker faker(){
        return new Faker();
    }

    @Bean
    public Random random(){
        return new Random();
    }

    public static int getRandomNumber(int min, int max) {
        return min + (int) (Math.random() * ((max - min) + 1));
    }

    public static Date getRandomDate(int minDate){

        int currentYear = LocalDate.now().getYear();
        // Generate random year between 1900 and current year
        int randomBYear = getRandomNumber(minDate, currentYear);
        // Generate random month between 1 and 12
        int randomMonth = getRandomNumber(1, 12);
        int maxDaysInMonth = new LocalDate(randomBYear, randomMonth, 1).dayOfMonth().getMaximumValue();
        int randomDay = getRandomNumber(1, maxDaysInMonth);
        DateTime birthDayJodaTime = new DateTime(randomBYear, randomMonth, randomDay, 0, 0);
        return birthDayJodaTime.toDate();


    }


    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        mailSender.setUsername("unscathedfitness@gmail.com");
        mailSender.setPassword("pxyrmlvwawujuvtf");
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");

        return mailSender;
    }


}
