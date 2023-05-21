package ph.cdo.xu.groudd.backend;


import com.github.javafaker.Faker;
import org.joda.time.DateTime;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionDTO;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionRepository;
import ph.cdo.xu.groudd.backend.entity.transaction.TransactionService;

import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootTest
public class MemberTest {

    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final TransactionService transactionService;
    private final TransactionRepository transactionRepository;
    private final Faker faker;
    private final Random ran;

    @Autowired
    public MemberTest(MemberService memberService, MemberRepository memberRepository, TransactionService transactionService, TransactionRepository transactionRepository, Faker faker, Random ran) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
        this.transactionService = transactionService;
        this.transactionRepository = transactionRepository;
        this.faker = faker;
        this.ran = ran;
    }

    @BeforeEach
    void clear(){
        memberRepository.deleteAll();
        transactionRepository.deleteAll();
    }

    @AfterEach
    void reset(){
        memberRepository.deleteAll();
        transactionRepository.deleteAll();
    }


    @Test
    @DisplayName("This Test should throw False")
    void shouldReturnFalse(){
        Assertions.assertFalse(memberService.doesEmailExists("joshuagarrysalcedo12345678@gmail.com"));
    }
//
//    @Test
//    @DisplayName("This Test should return True for duplicate email")
//    void shouldReturnTrue(){
//        String firstName = "Joshua";
//        String lastName = "Salcedo";
//        String email = "joshuagarrysalcedo12345678@gmail.com";
//
//        memberService.add(Member.builder()
//                        .firstName(firstName)
//                        .lastName(lastName)
//                        .email(email)
//                .build());
//        Assertions.assertTrue(memberService.doesEmailExists("joshuagarrysalcedo12345678@gmail.com"));
//    }


    @ParameterizedTest
    @CsvSource(value = {
            "student;student;inactive;member;monthly, 2, 1, 1",
            "inactive;member;monthly, 0, 1, 1",
            "member;member;member;member, 0, 4, 0",
            "monthly;monthly;monthly;monthly, 0, 0, 4",
    })
    @DisplayName("This should test the number of occurance of the members")
    void countMembership(String status, int numberOfStudents, int numberOfMembers, int numberOfMonthly){
        String[] statuses = status.split(";");
        double minimum = 50.0;
        double maximum = 100.0;
        for (String s : statuses) {
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
            memberService.add((Member) Member
                    .builder()
                    .weight(weight)
                    .height(height)
                    .occupation(occupation)
                    .address(address)
                    .membershipDetails(
                            MembershipDetails.builder()
                                    .membershipStatus(s.equalsIgnoreCase("member") ? Status.ACTIVE : Status.UNVERIFIED)
                                    .monthlySubscriptionStatus(s.equalsIgnoreCase("monthly") ? Status.ACTIVE : Status.UNVERIFIED)
                                    .studentStatus(s.equalsIgnoreCase("student") ? Status.ACTIVE : Status.UNVERIFIED)
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
                    .build());
        }

        int countAllMembers = memberRepository.findAll().size();

        int student = memberService.countActiveStudents();
        int members = memberService.countActiveMembers();
        int monthly = memberService.countActiveMonthly();

        System.out.println("Number of all entity " +  countAllMembers);
        Assertions.assertEquals(statuses.length, countAllMembers);

        System.out.println(Arrays.toString(statuses));

        System.out.println("Number of students " + student);
        Assertions.assertEquals(numberOfStudents, student );
        System.out.println("Number of members " + members);
        Assertions.assertEquals(numberOfMembers, members);
        System.out.println("Number of monthly " + monthly);
        Assertions.assertEquals(numberOfMonthly, monthly);

    }

    @Test
    void shouldBeAbleToAddTransactionToMembers() {
        List<TransactionDTO> transactions = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            TransactionDTO transaction = TransactionDTO.builder()
                    .date(new DateTime(faker.date().past(365, TimeUnit.DAYS)).toDate())
                    .description(faker.lorem().sentence())
                    .paymentMethod(PaymentMethod.Cash)
                    .transactionType(TransactionType.Sales)
                    .value(faker.number().randomDouble(2, 1, 1000))
                    .build();

            transactions.add(transaction);


        }

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

        for(int i = 0; i < transactions.size(); i++){
            memberService.addTransactionToMember(member.getId(), transactions.get(i));
        }
//        System.out.println(transactions.toString());
//        System.out.println(member.getTransactions().toString());
        Optional<Member> optionalMember = memberService.getMemberByEmail(member.getContactDetails().getEmail());
        Assertions.assertTrue(optionalMember.isPresent());
        member = optionalMember.get();
        Assertions.assertNotNull(member.getTransactions());
        Assertions.assertEquals(10, member.getTransactions().size());
    }

}
