package ph.cdo.xu.groudd.backend;

import com.github.javafaker.Faker;
import org.joda.time.DateTime;
import org.joda.time.Days;
import org.joda.time.Months;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import ph.cdo.xu.groudd.backend.configuration.ApplicationConfig;
import ph.cdo.xu.groudd.backend.entity.member.Member;
import ph.cdo.xu.groudd.backend.entity.member.MemberRepository;
import ph.cdo.xu.groudd.backend.entity.member.MemberService;
import ph.cdo.xu.groudd.backend.entity.member.MembershipDetails;
import ph.cdo.xu.groudd.backend.entity.model.BirthDetails;
import ph.cdo.xu.groudd.backend.entity.model.ContactDetails;
import ph.cdo.xu.groudd.backend.entity.model.Name;
import ph.cdo.xu.groudd.backend.entity.model.enums.Gender;
import ph.cdo.xu.groudd.backend.entity.model.enums.PaymentMethod;
import ph.cdo.xu.groudd.backend.entity.model.enums.Status;
import ph.cdo.xu.groudd.backend.entity.model.enums.TransactionType;
import ph.cdo.xu.groudd.backend.entity.transaction.Transaction;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionDTO;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionRepository;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionService;

import java.time.Month;
import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootTest
@ActiveProfiles("test")

public class TransactionTest {

    private final TransactionService transactionService;
    private final TransactionRepository transactionRepository;
    private final MemberRepository memberRepository;
    private final MemberService memberService;
    private final Faker faker;
    private final Random ran;

    @Autowired
    public TransactionTest(TransactionService transactionService, TransactionRepository transactionRepository, MemberRepository memberRepository, MemberService memberService, Faker faker, Random ran) {
        this.transactionService = transactionService;
        this.transactionRepository = transactionRepository;
        this.memberRepository = memberRepository;
        this.memberService = memberService;
        this.faker = faker;
        this.ran = ran;
    }

    @BeforeEach
    void initialize(){
        memberRepository.deleteAll();
        transactionRepository.deleteAll();
    }
    @AfterEach
    void reset(){
        memberRepository.deleteAll();
        transactionRepository.deleteAll();
    }

    @Test
    void shouldTestTransactionSummary(){
        double minimum = 50.0;
        double maximum = 100.0;
        String s = "member";

        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();
        String email = firstName + lastName + "@gmail.com";
        String address = faker.address().streetName();
        double weight = minimum + (maximum - minimum) * ran.nextDouble();
        double height = minimum + (maximum - minimum) * ran.nextDouble();
        String phone = faker.phoneNumber().cellPhone();
        String occupation = faker.job().title();



        //For Birthday
        Date birthday = ApplicationConfig.getRandomDate(1980);
        Date startDate = ApplicationConfig.getRandomDate(2022);
        Member member = Member
                .builder()
                .weight(weight)
                .height(height)
                .occupation(occupation)
                .address(address)
                .membershipDetails(
                        MembershipDetails.builder()
                                .membershipStatus(Status.ACTIVE)
                                .monthlySubscriptionStatus(Status.UNVERIFIED)
                                .studentStatus(Status.UNVERIFIED)
                                .build())
                .name(
                        Name
                                .builder()
                                .firstName(firstName)
                                .lastName(lastName)
                                .build())
                .contactDetails(
                        ContactDetails
                                .builder()
                                .email(email)
                                .phone(phone)
                                .build())
                .birthDetails(
                        BirthDetails
                                .builder()
                                .birthday(birthday)
                                .build())
                .gender(Gender.values()[ran.nextInt(Status.values().length)])
                .build();
        member = memberService.add(member);


        Assertions.assertNotNull(member);


        List<TransactionDTO> transactions = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            TransactionDTO transaction = TransactionDTO.builder()
                    .date(new DateTime(faker.date().past(365, TimeUnit.DAYS)).toDate())
                    .description(faker.lorem().sentence())
                    .paymentMethod(PaymentMethod.Cash)
                    .transactionType(TransactionType.Sales)
                    .value(500.0)
                    .build();

            transactions.add(transaction);

        }

        for (TransactionDTO transaction : transactions) {
            memberService.addTransactionToMember(member.getId(), transaction);
        }
//        System.out.println(transactions.toString());
//        System.out.println(member.getTransactions().toString());
        Optional<Member> optionalMember = memberService.getMemberByEmail(member.getContactDetails().getEmail());
        Assertions.assertTrue(optionalMember.isPresent());
        member = optionalMember.get();
        Assertions.assertNotNull(member.getTransactions());
        Assertions.assertEquals(10, member.getTransactions().size());

        Map<String, Object> objectMap = transactionService.getTransactionSummary(transactionService.getAllTransactions());


        Assertions.assertNotNull(objectMap);



        for (Map.Entry<String, Object> entry : objectMap.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            System.out.println(key + " : " + value);
        }



         Assertions.assertEquals(5000.0, objectMap.get("sales"));
    }

    @Test
    void shouldTestAllTransactionSummaryByMonth(){
        double minimum = 50.0;
        double maximum = 100.0;
        String s = "member";

        String firstName = faker.name().firstName();
        String lastName = faker.name().lastName();
        String email = firstName + lastName + "@gmail.com";
        String address = faker.address().streetName();
        double weight = minimum + (maximum - minimum) * ran.nextDouble();
        double height = minimum + (maximum - minimum) * ran.nextDouble();
        String phone = faker.phoneNumber().cellPhone();
        String occupation = faker.job().title();



        //For Birthday
        Date birthday = ApplicationConfig.getRandomDate(1980);
        Date startDate = ApplicationConfig.getRandomDate(2022);
        Member member = Member
                .builder()
                .weight(weight)
                .height(height)
                .occupation(occupation)
                .address(address)
                .membershipDetails(
                        MembershipDetails.builder()
                                .membershipStatus(Status.ACTIVE)
                                .monthlySubscriptionStatus(Status.UNVERIFIED)
                                .studentStatus(Status.UNVERIFIED)
                                .build())
                .name(
                        Name
                                .builder()
                                .firstName(firstName)
                                .lastName(lastName)
                                .build())
                .contactDetails(
                        ContactDetails
                                .builder()
                                .email(email)
                                .phone(phone)
                                .build())
                .birthDetails(
                        BirthDetails
                                .builder()
                                .birthday(birthday)
                                .build())
                .gender(Gender.values()[ran.nextInt(Status.values().length)])
                .build();
        member = memberService.add(member);


        Assertions.assertNotNull(member);


        List<TransactionDTO> transactions = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            Calendar calendar = new GregorianCalendar(2023, Calendar.JANUARY, 1);
            long startMillis = calendar.getTimeInMillis();

            calendar.set(Calendar.DAY_OF_MONTH, 31);
            long endMillis = calendar.getTimeInMillis();

            long randomMillis = startMillis + (long) (Math.random() * (endMillis - startMillis));

            Date randomDate = new Date(randomMillis);

            TransactionDTO transaction = TransactionDTO.builder()
                    .date(randomDate)
                    .description(faker.lorem().sentence())
                    .paymentMethod(PaymentMethod.Cash)
                    .transactionType(TransactionType.Sales)
                    .value(300.0)
                    .build();

            transactions.add(transaction);

        }


        Calendar calendar = new GregorianCalendar(2023, Calendar.FEBRUARY, 1);
        long startMillis = calendar.getTimeInMillis();

        calendar.set(Calendar.DAY_OF_MONTH, 28);
        long endMillis = calendar.getTimeInMillis();

        long randomMillis = startMillis + (long) (Math.random() * (endMillis - startMillis));

        Date februaryDate = new Date(randomMillis);
        TransactionDTO febTransaction = TransactionDTO.builder()
                .date(februaryDate)
                .description(faker.lorem().sentence())
                .paymentMethod(PaymentMethod.Cash)
                .transactionType(TransactionType.Utilities)
                .value(200.0)
                .build();

        transactions.add(febTransaction);

        for (TransactionDTO transaction : transactions) {
            memberService.addTransactionToMember(member.getId(), transaction);
        }
//        System.out.println(transactions.toString());
//        System.out.println(member.getTransactions().toString());
        Optional<Member> optionalMember = memberService.getMemberByEmail(member.getContactDetails().getEmail());
        Assertions.assertTrue(optionalMember.isPresent());
        member = optionalMember.get();
        Assertions.assertNotNull(member.getTransactions());
        Assertions.assertEquals(11, member.getTransactions().size());

       calendar = new GregorianCalendar(2023, Calendar.JANUARY, 1);
         startMillis = calendar.getTimeInMillis();

        calendar.set(Calendar.DAY_OF_MONTH, 31);
        endMillis = calendar.getTimeInMillis();

         randomMillis = startMillis + (long) (Math.random() * (endMillis - startMillis));

        Date januaryDate = new Date(randomMillis);

        List<TransactionDTO> januaryTransaction = transactionService.transactionsByMonth(1,2023);
        Map<String, Object> objectMap = transactionService.getTransactionSummary(januaryTransaction);


        Assertions.assertNotNull(objectMap);

        Assertions.assertNotNull(januaryTransaction);
        Assertions.assertEquals(10, januaryTransaction.size());

        for (Map.Entry<String, Object> entry : objectMap.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            System.out.println(key + " : " + value);
        }


        Map<String, Object> allTransactionsMapped = transactionService.getTransactionSummary(transactionService.getAllTransactions());
        Assertions.assertEquals(2800.0, allTransactionsMapped.get("netProfit"));

        for (Map.Entry<String, Object> entry : allTransactionsMapped.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            System.out.println(key + " : " + value);
        }

        Assertions.assertEquals(3000.0, objectMap.get("sales"));
    }
}
